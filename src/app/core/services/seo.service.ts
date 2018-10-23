import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { HtmlToPlainTextPipe } from "../../shared/pipes/html-to-plain-text.pipe";
import { TruncatePipe } from "../../shared/pipes/truncate.pipe";

@Injectable({
    providedIn: 'root',
})
export class SeoService {

    private titleService: Title;
    private headElement: HTMLElement;

    constructor(
        @Inject(DOCUMENT) private document,
        //private htmlToPlainText: HtmlToPlainTextPipe,
       //private truncate: TruncatePipe
    ) {}

    setTitle(newTitle: string) {
        const title = newTitle //this.htmlToPlainText.transform(newTitle)
        this.titleService.setTitle(title);
        this.getOrCreateMetaPropertyElement('og:title').setAttribute('content', title);
        this.getOrCreateMetaElement('twitter:title').setAttribute('content', title);
    }

    setImage(img:string) {
        this.getOrCreateMetaPropertyElement('og:image').setAttribute('content', img);
        this.getOrCreateMetaPropertyElement('twitter:image').setAttribute('content', img);
        
    }

    setDescription(description: string) {
        const descTruncated: string =  description //this.truncate.transform(description, 400, '...')
        const desc = descTruncated // this.htmlToPlainText.transform(descTruncated)

        this.getOrCreateMetaElement('description').setAttribute('content', desc);
        this.getOrCreateMetaPropertyElement('og:description').setAttribute('content', desc);
        this.getOrCreateMetaElement('twitter:description').setAttribute('content', desc);
    }

    setLang(lang: string) {
        this.getOrCreateMetaElement('language').setAttribute('content', lang)
        this.document.querySelector('html').setAttribute('lang', lang)
    }

    setRobots(robots) {
        this.getOrCreateMetaElement('robots').setAttribute('content', robots);
    }

    private getOrCreateMetaElement(name: string): HTMLElement {
        let el: HTMLElement;
        el = this.document.querySelector('meta[name="' + name + '"]');
        if (el === null) {
            el = this.document.createElement('meta');
            el.setAttribute('name', name);
            this.headElement.appendChild(el);
        }
        return el;
    }

    private getOrCreateMetaPropertyElement(name: string): HTMLElement {
        let element: HTMLElement;
        element = this.document.querySelector('meta[property="' + name + '"]');
        if (element === null) {
                        element = this.document.createElement('meta');
                        element.setAttribute('property', name);
                        this.headElement.appendChild(element);
        }
        return element;
    }

    private getOrCreateLinkRelElement(name: string): HTMLElement {
        let element: HTMLElement;
        element = this.document.querySelector('link[rel="' + name + '"]');
        if (element === null) {
                        element = this.document.createElement('link');
                        element.setAttribute('rel', name);
                        this.headElement.appendChild(element);
        }
        return element;
    }

        
   
}
