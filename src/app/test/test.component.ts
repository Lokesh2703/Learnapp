import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css',
                  './css/style.css']
})
export class TestComponent implements OnInit {
  public componentName = 'Lokesh K';
  public siteUrl = window.location.href;
  public isDisabled = false;
  public isCorrect=false;
  public isSpecial = true;
  public to="";
  public colour="blue";
  public messageClasses={
    "text-success":this.isCorrect,
    "text-danger":!this.isCorrect,
    "text-special":this.isSpecial
  };

  public messageStyles = {
    color: "cyan",
    fontStyle:"bold"
  };

  constructor() { }

  ngOnInit(): void {
    // this.loadScript("js/bootstrap.min.js");
    // this.loadScript("js/jquery.min.js");
    // this.loadScript("js/main.js");
    // this.loadScript("js/popper.js");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  showProposal(){
    return "I Love You"
  }

  onClick(){
    this.componentName = "Koliparthi Lokesh";
    this.to = "Swathi";
  }

}
