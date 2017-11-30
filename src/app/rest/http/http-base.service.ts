import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export abstract class HttpBaseService {

    protected uploadProgress: number;
    protected uploadProgressObservable: Observable<any>;
    protected uploadProgressObserver: any;

    constructor(private http: Http,
        protected router: Router,
        private toastr: ToastrService) {

        this.uploadProgressObservable = new Observable((observer: Observer<any>) => {
            this.uploadProgressObserver = observer;
        });
    }

    // executa quando comeca uma requisicao
    private openLoaddingInfo(): void {

    }

    // executa quando termina uma requisicao
    private closeLoaddingInfo(): void {

    }

    protected getDefaultRequestHeaders(): Headers {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return headers;
    }

    protected getDefaultRequestOptions(): RequestOptions {
        var headers = this.getDefaultRequestHeaders();
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    protected getDownloadRequestOptions(): RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': '*' });
        let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
        return options;
    }

    protected get(url: string): Observable<Response> {
        this.requestInterceptor();
        return this.responseIntercept(this.http.get(url, this.getDefaultRequestOptions()));
    }

    protected put(url: string, body: any): Observable<Response> {
        this.requestInterceptor();
        return this.responseIntercept(this.http.put(url, body, this.getDefaultRequestOptions()));
    }

    protected post(url: string, body: any, requestOptions?: RequestOptions): Observable<Response> {
        if (!requestOptions)
            requestOptions = this.getDefaultRequestOptions();

        this.requestInterceptor();
        return this.responseIntercept(this.http.post(url, body, requestOptions));
    }

    protected uploadFile(url: string, file: File, params: any): Observable<any> {
        var filesArray = new Array<File>();
        filesArray.push(file);
        return this.uploadFiles(url, filesArray, params);
    }

    protected uploadFiles(url: string, files: Array<File>, params: any): Observable<any> {
        this.uploadProgress = 0;
        const headers = this.getDefaultRequestHeaders();
        headers.delete("Content-Type");

        const formData: FormData = new FormData();

        const arryKeys = Object.keys(params).map((key) => { return key });
        arryKeys.forEach((p) => {
            formData.append(p, params[p]);
        });

        files.forEach((f) => {
            formData.append("filesUpload[]", f, f.name);
        });

        this.uploadProgressObservable.subscribe(result => {
            // executa no progresso do upload
        });

        return Observable.create(observer => {
            const xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    // upload concluido
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        // erros de upload
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.uploadProgress = Math.round(event.loaded / event.total * 100);
                this.uploadProgressObserver.next(this.uploadProgress);
            };

            xhr.open('POST', url, true);
            const headersKeys = headers.keys();
            for (let i = 0; i < headersKeys.length; i++) {
                xhr.setRequestHeader(headersKeys[i], headers.get(headersKeys[i]));
            }
            // iniciando o upload
            xhr.send(formData);
        });
    }

    protected download(url: string, name?: string): Observable<Response> {

        this.requestInterceptor();
        const obs = this.responseIntercept(this.http.get(url, this.getDownloadRequestOptions()));
        obs.subscribe(result => {
            const headers = result.headers;

            const filename = name ? name : headers.get('x-filename');
            const contentType = headers.get('content-type');

            const blob = result.blob();

            // se for no IE
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                const urlDownload = window.URL.createObjectURL(blob);
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', urlDownload);
                linkElement.setAttribute("download", filename);
                const clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });

                linkElement.dispatchEvent(clickEvent);
            }
        });
        return obs;
    }

    protected delete(url: string): Observable<Response> {
        this.requestInterceptor();
        return this.responseIntercept(this.http.delete(url, this.getDefaultRequestOptions()));
    }

    private responseIntercept(obs: Observable<Response>): Observable<Response> {
        return obs.catch(this.onCatch)
            .do((res: Response) => { this.onSubscribeSuccess(res); },
            (error: any) => { this.onSubscribeError(error); })
            .finally(() => { this.onFinally(); });
    }

    // Ocorre no inicio da requisicao
    private requestInterceptor(): void {
        this.openLoaddingInfo();
    }

    // Ocorre no fim da requisicao
    private responseInterceptor(): void {
        this.closeLoaddingInfo();
    }

    // Ocorre quando vem resposta e repassa
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    // Ocorre quando vem resposta de sucesso
    private onSubscribeSuccess(res: Response): void {
        if (res.status == 401) {
            // Informacoes de acesso negado
            this.toastr.error("Houve um problema ao executar a ação.", "Ops!")
        } else {

        }
    }

    // Ocorre quando vem resposta de erro
    private onSubscribeError(error: any): void {
        if (error.status == 401) {
            // Informacoes de acesso negado
            this.toastr.error("Houve um problema ao executar a ação.", "Ops!")
        }
    }

    // Ocorre no final da resposta
    private onFinally(): void {
        this.responseInterceptor();
    }
}
