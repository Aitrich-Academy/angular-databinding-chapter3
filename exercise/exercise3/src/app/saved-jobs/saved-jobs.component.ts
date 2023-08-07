import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent {
  jobs: any[] = [
    {
      designation: 'Angular Developer',
      companyLogo: 'assets/images/rec.png',
      companyName: 'D Company',
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
      companyName: 'B Company',
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
