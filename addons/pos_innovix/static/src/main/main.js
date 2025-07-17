import {registry} from "@web/core/registry";

import {Component, useState, useRef} from "@odoo/owl";

class PosInnovixClientAction extends Component {
    static template = "pos_innovix.Main";

    setup() {
        this.state = useState(
            {
                // name: 'Han Zaw Nyein', age: 20,
                partners: [
                    {id: 1, name: 'A'},
                    {id: 2, name: 'B'},
                    {id: 3, name: 'C'},
                ]
            });
        // this.partner = useState({name: 'Han Zaw Nyein', age: 20,phone:'09999'});
        // this.searchRef = useRef('search-input');

    }

    //
    // change() {
    //     console.log("hrello change method");
    //     this.state.age +=1
    //     console.log(this.state.age)
    // }
    //
    // search(){
    //     console.log("search")
    //     console.log(this.searchRef.el.value)
    //     this.searchRef.el.value = ''
    // }
    //
    // create_partner(){
    //     console.log(this.partner)
    //     this.partner.phone = ''
    // }
}

// remember the tag name we put in the first step
registry.category("actions").add("pos_innovix.PosInnovixClientAction", PosInnovixClientAction);