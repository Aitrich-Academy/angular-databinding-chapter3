import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  detailGroups: any[] = [
    {
     
      logo: 'assets/images/Company Logo (2).png',
      jobDesignation: 'Social Media Assistant',
      location: 'Paris,France',
      text1: 'Full-Time',
      text2: 'Marketing',
      text3: 'Design',
      show: true
    },
    {
      
      logo: 'assets/images/Logo.png',
      jobDesignation: 'Brand Designer',
      location: 'San Fransisco,USA',
      text1: 'Full-Time',
      text2: 'Marketing',
      text3: 'Design',
      show: true
    },
    // Add more groups as needed
  ];

  constructor() { }
}
