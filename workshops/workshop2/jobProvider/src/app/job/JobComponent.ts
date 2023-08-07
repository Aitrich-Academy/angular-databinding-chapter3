import { Component } from '@angular/core';
import { job } from '../jobList';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent {

jobs:job[];
  filteredJobs: job[];
  constructor()
  {
   this.jobs =[
    {
      companyLogo:"../../assets/images/Rectangle 14.png",
      job_post: "UX/UI Designer",
      company_name: "Shopee ",
      location: "Indonasia",
      time_schedule: "Full-time",
      salary_range: "$30,000 - $50,000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (1).png",
      job_post: "Product Designer",
      company_name: "Amazon",
      location: "Indonesia",
      time_schedule: "Full-time",
      salary_range: "$80,000 - $100,000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (2).png",
      job_post: "UX Designer",
      company_name: "Ebay",
      location: "San Francisco",
      time_schedule: "Full-time",
      salary_range: "$80,000 - $100,000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14.png",
      job_post: "Software Engineer",
      company_name: "Tech Solutions Inc.",
      location: "San Francisco",
      time_schedule: "Full-time",
      salary_range: "$80,000 - $100,000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (1).png",
      job_post: "Marketing Manager",
      company_name: "Global Marketing Agency",
      location: "New York City",
      time_schedule: "Full-time",
      salary_range: "$70,000 - $9000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14.png",
      job_post: "Customer Service Representative",
      company_name: "ServiceFirst Corporation",
      location: "Chicago",
      time_schedule: "Part-time",
      salary_range: "$3000 - $5000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (1).png",
      job_post: "Graphic Designer",
      company_name: "Creative Designs Studio",
      location: "Los Angeles",
      time_schedule: "Full-time",
      salary_range: "$50,000 - $60,000"
    },
    {
      companyLogo:"../../assets/images/Rectangle 14 (2).png",
      job_post: "Sales Associate",
      company_name: "Retail Solutions Ltd.",
      location: "Miami",
      time_schedule: "Part-time",
      salary_range: " $30,000 - $50,000 "
    }
  ];
  this.filteredJobs=this.jobs;
}
filterJobs(event: Event): void {
  const searchTerm = (event.target as HTMLInputElement).value;
  this.filteredJobs = this.jobs.filter(job =>
    job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.job_post.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

  isHovered: boolean = false;
}
