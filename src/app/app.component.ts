import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nesting-items';
  name = 'Angular 6';
  toggle: any = {};
  nestItems: any = [
    {
      title: 'one'
    },
    {
      title: 'two',
      children: [
        {
          title: 'two.one'
        },
        {
          title: 'two.two',
          children: [
            {
              title: 'two.two.one'
            },
            {
              title: 'two.two.two'
            }
          ]
        },
        {
          title: 'two.three',
          children: [
            {
              title: 'two.three.one'
            },
            {
              title: 'two.three.two'
            }
          ]
        }
      ]
    },
    {
      title: 'three',
      children: [
        {
          title: 'three.one'
        },
        {
          title: 'three.two',
          children: [
            {
              title: 'three.two.one'
            },
            {
              title: 'three.two.two'
            }
          ]
        },
        {
          title: 'three.three',
          children: [
            {
              title: 'three.three.one'
            },
            {
              title: 'three.three.two'
            }
          ]
        }
      ]
    },
    {
      title: 'four'
    },
    {
      title: 'five',
      children: [
        {
          title: 'five.one'
        },
        {
          title: 'five.two'
        }
      ]
    },
    {
      title: 'six',
      children: [
        {
          title: 'six.one'
        },
        {
          title: 'six.two',
          children: [
            {
              title: 'six.two.one'
            },
            {
              title: 'six.two.two'
            }
          ]
        },
        {
          title: 'six.three',
          children: [
            {
              title: 'six.three.one'
            },
            {
              title: 'six.three.two'
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    this.toggle = this.nestItems.map(i => false);
  }
}
