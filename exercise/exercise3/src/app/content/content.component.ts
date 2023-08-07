import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

    jobs: any[] = [
      {
        designation: 'Software Developer',
        companyLogo: 'assets/images/rec.png',
        companyName: 'ABC Company',
        isFeatured: true,
        text1: 'Full-time',
        text2: 'Mid-level',
        text3: '$3000-$5000',
        text4: 'Indonesia',
        text5: 'Onsite'
      },
      {
        designation: 'UX Designer',
        companyLogo: 'assets/images/cde.png',
        companyName: 'XYZ Company',
        isFeatured: true,
        text1: 'Full-time',
        text2: 'Mid-level',
        text3: '$3000-$5000',
        text4: 'Indonesia',
        text5: 'Onsite'
      },
      {
        designation: 'Dot Net Developer',
        companyLogo: 'assets/images/abc.png',
        companyName: 'PRNV Company',
        isFeatured: true,
        text1: 'Full-time',
        text2: 'Mid-level',
        text3: '$3000-$5000',
        text4: 'Indonesia',
        text5: 'Onsite'
      },{
        designation: 'UX Designer',
        companyLogo: 'assets/images/cde.png',
        companyName: 'XYZ Company',
        isFeatured: true,
        text1: 'Full-time',
        text2: 'Mid-level',
        text3: '$3000-$5000',
        text4: 'Indonesia',
        text5: 'Onsite'
      },
      {
        designation: 'Dot Net Developer',
        companyLogo: 'assets/images/abc.png',
        companyName: 'PRNV Company',
        isFeatured: true,
        text1: 'Full-time',
        text2: 'Mid-level',
        text3: '$3000-$5000',
        text4: 'Indonesia',
        text5: 'Onsite'
      }
      
      // Add more job objects as needed
    ];
}
