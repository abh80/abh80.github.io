import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Stars Tracker';
  ngOnInit(): void {
    document
      .getElementsByClassName('scrollable-content')[0]
      .addEventListener('scroll', () => {
        let scrollY =
          document.getElementsByClassName('scrollable-content')[0].scrollTop;
        if (scrollY > 100) {
          (
            document.getElementsByClassName('hero-banner')[0] as HTMLElement
          ).classList.add('is-not-visible');
          (
            document.getElementsByClassName('scroll-me')[0] as HTMLElement
          ).classList.add('is-not-visible');
          (
            document.getElementsByClassName('specifications')[0] as HTMLElement
          ).classList.add('is-visible');
        } else {
          (
            document.getElementsByClassName('hero-banner')[0] as HTMLElement
          ).classList.remove('is-not-visible');
          (
            document.getElementsByClassName('scroll-me')[0] as HTMLElement
          ).classList.remove('is-not-visible');
          (
            document.getElementsByClassName('specifications')[0] as HTMLElement
          ).classList.remove('is-visible');
          (document.getElementById('tbc') as HTMLElement).textContent = 'Home';
        }
        Array.from(
          document.getElementsByClassName('toggles-visibility')
        ).forEach((x: any) => {
          if (x.classList.contains('is-visible')) return;
          if (x.offsetHeight - scrollY <= 20) x.classList.add('is-visible');
        });
        Array.from(document.getElementsByClassName('toggles-visibility'))
          .filter(
            (x) =>
              x.classList.contains('is-visible') &&
              !x.classList.contains('specifications')
          )
          .forEach((x: any) => {
            if (x.offsetHeight - scrollY > 20) x.classList.remove('is-visible');
          });
        Array.from(document.getElementsByClassName('is-section')).forEach(
          (x: any, i: number) => {
            if (
              scrollY >= x.offsetTop - 224 &&
              scrollY <= x.offsetTop - 224 + x.offsetHeight
            ) {
              (document.getElementById('tbc') as HTMLElement).textContent =
                document.getElementsByClassName('separator')[i].textContent;
            }
          }
        );
      });
  }
}
