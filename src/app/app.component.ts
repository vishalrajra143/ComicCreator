import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'comic-creator';
  comicPanels: string[] = [];
  isDarkTheme = false;

  updateComicPanels(panels: string[]): void {
    this.comicPanels = panels;
  }
  
  ngOnInit() {
    this.setInitialTheme();
  }

  setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeName = this.isDarkTheme ? 'theme-dark' : 'theme-light';
    this.setTheme(themeName);
  }

  setInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'theme-dark') {
      this.isDarkTheme = true;
      this.setTheme('theme-dark');
    } else {
      this.isDarkTheme = false;
      this.setTheme('theme-light');
    }
  }
}
