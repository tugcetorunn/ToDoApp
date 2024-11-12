import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ToDoApp';
  // user = 'Tuğçe'; // burada oluşturulan değişkenlerin html de kullanılmasına model binding deniliyor.
  // items = [
  //   {description: "Breakfast", action: "No"},
  //   {description: "Sports", action: "No"},
  //   {description: "Pay the bills", action: "No"},
  //   {description: "Study to be a good coder", action: "No"},
  //   {description: "Create a CRM app", action: "No"}
  // ] yukarıdaki değişkenleri direk component içinde yazmak yerine model içerisinde belirlemek daha doğru olur. (single responsibility)

  model = new Model();

  getNames(){
    return this.model.user; // nesne oluşturup da yapılabilir. bu şekilde daha kullanışlı 
  }

  getTitle(){
    return this.model.title;
  }

  getItems(){
    // return this.model.items; // action false olanları göstermek için filtre ile itemleri çağırabiliriz.
    return this.model.items.filter(item => !item.action) // (!) ile false ları kastetmiş oluyoruz. 
    // sayfa refresh olduğunda kullanıcı tercihleri bir yerde tutulmadığı için uygulamadaki verilere göre sayfa geliyor.
  }
}
