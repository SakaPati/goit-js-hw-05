class Storage{
    constructor(tovar) {
        this.tovar = tovar;
        tovar = [];
    }

    getItem(){
        return console.log(this.tovar);;
    }

    addItem(item){
        this.tovar.push(item)
    }

    removeItem(item) {
        const index = this.tovar.indexOf(item);
        if (index !== -1) {
          this.tovar.splice(index, 1);
        }
      }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

storage.addItem("Дроїд")
storage.addItem("автобус")
storage.addItem("мопед")
storage.addItem("Адроный Колайдер")
storage.removeItem("мопед")

storage.getItem()