import { Component } from '@angular/core';
import { member } from './memberList';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  members:member[];
 memberList: member[];
  constructor()
  {
   this.members =[
    {
       member_image:"../../assets/images/man-isolated-showing-facial-emotions 1.png",
       member_name:"Alen",
       qualification:"MCA",
       experience:"3 Year",
       place:"Bangalore"
    },
    {
      member_image:"../../assets/images/cheerful-curly-business-girl-wearing-glasses 2.png",
      member_name:"Sarah",
      qualification:"MSC",
      experience:"2 Year",
      place:"Chennai"
   },
   {
    member_image:"../../assets/images/adult-serious-businessman-looking-camera 1.png",
    member_name:"Vivek",
    qualification:"BTech/CSE",
    experience:"5Year",
    place:"Thiruvananthapuram"
 },
 {
  member_image:"../../assets/images/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign 2.png",
  member_name:"DeepoakRoy",
  qualification:"BTech/EEE",
  experience:"2Year",
  place:"Calicut"
}
];
    this.memberList=this.members;
  }
  filterMembers(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.memberList= this.members.filter(job =>
      job.member_name.toLowerCase().includes(searchTerm.toLowerCase())  );
  }
}
