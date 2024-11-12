export class Model {
    title;
    user;
    items;

    constructor(){
        this.title = "To Do App";
        this.user = "Tuğçe";
        this.items = [
                        new ToDoItem("Breakfast", false),
                        new ToDoItem("Sports", true),
                        new ToDoItem("Pay the bills", false),
                        new ToDoItem("Study to be a good coder", false),
                        new ToDoItem("Create a CRM app", false),
                    ];
    }
}

// const m = new Model(); dediğimizde nesne üzerinden değişkenler oluşturulacak. 

export class ToDoItem {
    description;
    action;

    constructor(description: string, action: boolean) { // tip tanımlanmadığında hata veriyor
        this.description = description;
        this.action = action;
    }

        // items = [
        //   {description: "Breakfast", action: "No"}, // obje şeklinde tanımlamak yerine propertylerin güvenliği doğru yazımı için class tanımlamak daha iyidir.
        //   {description: "Sports", action: "No"},
        //   {description: "Pay the bills", action: "No"},
        //   {description: "Study to be a good coder", action: "No"},
        //   {description: "Create a CRM app", action: "No"}
        // ]
}