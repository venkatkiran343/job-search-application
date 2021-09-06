import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  imageUrl: string;
  price: string;
  place: string;
  qualification1: string;
  qualification2: string;
  qualification3: string;
  qualification4: string;
  aboutJob: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Google',
      subject: 'Full time UI Designer',
      date: '5h',
      id: 0,
      imageUrl: 'https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png',
      price: '$20k - ',
      place: ' Tokya,Japan',
      qualification1: '- Bechelor s degree or equivalent practical experince.',
      qualification2: '- 8 years of techincal UI designer experience such as creating strategic product.',
      qualification3: '- Experience driving product vision, go-to-market strategy, and design discussions.',
      qualification4: '- Experience developing internet products and technologies.',
      aboutJob: 'Work closely with Business Analysts to translate approach notes into wireframes and mockups that lead to intuitive.',
      read: false
    },
    {
      fromName: 'Amazon',
      subject: 'Product Designer',
      date: '22h',
      id: 1,
      imageUrl: 'https://sm.mashable.com/mashable_in/image/default/uploads252fcard252fimage252f1603703252f270775c5-1af8-4bce-96_t2pb.png',
      price: '$10k - ',
      place: ' Tokya,Japan',
      qualification1: '- Bechelor s degree or equivalent practical experince.',
      qualification2: '- 8 years of techincal UI designer experience such as creating strategic product.',
      qualification3: '- Experience driving product vision, go-to-market strategy, and design discussions.',
      qualification4: '- Experience developing internet products and technologies.',
      aboutJob: 'Work closely with Business Analysts to translate approach notes into wireframes and mockups that lead to intuitive.',
      read: false
    },
    {
      fromName: 'Facebook',
      subject: 'UX Designer',
      date: '4d',
      id: 2,
      imageUrl: 'https://i.pinimg.com/originals/d5/18/ec/d518eceea19f4b1a2ee032ddc634dd7d.jpg',
      price: '$14k - ',
      place: ' Tokya,Japan',
      qualification1: '- Bechelor s degree or equivalent practical experince.',
      qualification2: '- 8 years of techincal UI designer experience such as creating strategic product.',
      qualification3: '- Experience driving product vision, go-to-market strategy, and design discussions.',
      qualification4: '- Experience developing internet products and technologies.',
      aboutJob: 'Work closely with Business Analysts to translate approach notes into wireframes and mockups that lead to intuitive.',
      read: false
    },
    {
      fromName: 'Swiggy',
      subject: 'Full time UI Designer',
      date: '9d',
      id: 3,
      imageUrl: 'https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/06/Swiggy-1594035877.jpg',
      price: '$40k - ',
      place: ' Tokya,Japan',
      qualification1: '- Bechelor s degree or equivalent practical experince.',
      qualification2: '- 8 years of techincal UI designer experience such as creating strategic product.',
      qualification3: '- Experience driving product vision, go-to-market strategy, and design discussions.',
      qualification4: '- Experience developing internet products and technologies.',
      aboutJob: 'Work closely with Business Analysts to translate approach notes into wireframes and mockups that lead to intuitive.',
      read: false
    },

  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
