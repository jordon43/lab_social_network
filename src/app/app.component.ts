import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lab4';
  public login = false;
  public admin = false;
  public id = -1;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    //console.log(this.admin)
    this.id = Number(localStorage.getItem('id'))
    if (localStorage.getItem('id') === null){
      this.login = false
      this.admin = false
    }
    else {
      this.login = true
    }
    this.http
    .post('https://localhost:3000/client/info', {id: this.id})
        .subscribe((res: any) => {
          if (res.role === "admin")
            this.admin = true;
            console.log(this.admin)
            this.ngOnInit();
        });
  }

  out() {
    localStorage.clear();
    this.login = false
    this.admin = false
    //console.log(localStorage.getItem('id'))
    this.router.navigateByUrl('/login')
  }
}
