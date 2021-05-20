export class Quote {
    name?: string;
    author?: string;
    quote?: string;
    downvote?:number = 0;
    upvote?:number = 0;
    todayDate?: Date;
    
    constructor(name?: string, author?: string, quote?: string, downvote?:number, upvote?:number)
    {
       
        this.author = author;
        this.quote = quote;
        this.downvote = downvote;
        this.upvote = upvote;

     
    }

  
  


}
