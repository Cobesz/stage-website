import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visie-afstuderen',
  templateUrl: './visie-afstuderen.component.html',
  styleUrls: ['./visie-afstuderen.component.css']
})
export class VisieAfstuderenComponent implements OnInit {
    image;
    modal;
    modalImg;
    captionText;
    span;

    constructor() {
    }

    open(e) {

        console.log(e.path[0].src);

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        this.image = e.path[0].src;
        this.modalImg = document.getElementById('img01');
        this.captionText = document.getElementById('caption');
        this.openModal(this.image);
    }

    openModal(image) {
        this.modal.style.display = 'block';
        this.modalImg.src = image;
        // this.captionText.innerHTML = this.alt;
    }

    closeModal() {
        this.modal.style.display = 'none';
    }

    ngOnInit() {
        //         // Get the modal
        this.modal = document.getElementById('myModal');
    }
}
