const navigation_panel_items= {
    dashboard: {
        value: "<i class=\"fas fa-laptop\"></i> Dashboard",
        name: "dashboard",
        active: true
    },
    myListing: {
        value: "<i class=\"fas fa-list-ul\"></i> My Listing",
        name: "myListing",
        active: false
    },
    promotions: {
        value: "<i class=\"fas fa-bolt\"></i> Promotions",
        name: "promotions",
        active: false
    },
    bookmarks: {
        value: "<i class=\"far fa-bookmark\"></i> Bookmarks",
        name: "bookmarks",
        active: false
    },
    accountDetail: {
        value: "<i class=\"fas fa-cog\"></i> Account detail",
        name: "accountDetail",
        active: false
    },
    logout: {
        value: "<i class=\"fas fa-lock\"></i> Logout",
        name: "logout",
        active: false
    }
};






var app = new Vue({
    el:'#navigation',
    data: {
        navigation_panel_items: navigation_panel_items,
        navigation_panel_item: '',
        current_element: 'dashboard',
    },
    methods: {
        active_element_navigation_panel: function (item) {
            this.navigation_panel_items[this.current_element].active = false;
            this.current_element = item;
            this.navigation_panel_items[this.current_element].active = true;
            return "v-bind: '{'navigation-item-active' : navigation_panel_item.active, 'navigation-item' : !navigation_panel_item.active'";

        }
    }
});

