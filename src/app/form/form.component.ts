import { DetailsComponent } from './../details/details.component';
import { Component, OnInit } from '@angular/core';
import {Quote} from './../quote'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
 
  constructor() {
  
   }
  public quotes!:Quote[];

  upvotes?:number = 0;  
  downvotes?:number = 0;

   newName?:string = "";
   newAuthor?:string = "";
   newQuote?:string = "";
   newUpvote?:number = 0;
   newdownvote?:number = 0
   newDate?:Date;
   

  ngOnInit(): void {
   this.quotes =[
      // {name:'Kelvin Cheruiyot', author:'Nelson Mandela', quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", upvote: 0, downvote:0, todayDate:new Date()},
      // {name:'"Alfred Kumasi', author:'Steve Jobs', quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people 's thinking.", upvote: 0, downvote:0},
      // {name:'"James Kajwang', author:'Oprah Winfrey', quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", upvote: 0, downvote:0},
      // {name:'"Anne Kyalo', author:'Mark Twain', quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", upvote: 0, downvote:0},
   
     ];

      }

       deleteQuote(id:number){
        const deletequote = confirm('Click OK to delete to delete permanently')
        if(deletequote){
       this.quotes =  this.quotes.filter((v,i)=> i!==id)
      }}

      addQuote(){
        this.quotes.push({
          
          name:this.newName,
          author:this.newAuthor,
          quote:this.newQuote,
          upvote:this.newUpvote = 0,
          downvote:this.newUpvote = 0,
          todayDate: this.newDate = new Date()
         
        })
        this.newQuote = ""
        this.newName = ""
        this.newAuthor = ""
      
      }

      public addvote(quote1:any){
        quote1.upvote++;
      }
     
      public reducevote(quote1:any){
        quote1.downvote++;
      }


     
}
