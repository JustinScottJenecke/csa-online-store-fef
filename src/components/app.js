const app = new Vue({

    el : "#app",
    data : {

        cart : {
            contents : []
        },

        products : [

            {
                course : "Intro To Web",
                preview : 'html_css_preview.svg',
                level : "Beginner",
                languages : [
                    "HTML",
                    "CSS"
                ],
                cost : 75,
                comingSoon : true
            },            {
                course : "Web Design",
                preview : 'bootstrap_preview.svg',
                level : "Beginner",
                languages : [
                    "HTML",
                    "CSS",
                    "Bootstrap"
                ],
                cost : 100
            },
            {
                course : "Interactive Web Apps",
                preview : 'javascript_preview.svg',
                level : "Beginner",
                languages : [
                    "JavaScript"
                ],
                cost : 300
            
            },
            {
                course : "Frontend Frameworks",
                preview : 'vue_preview.svg',
                level : "Intermediate",
                languages : [
                    "JavaScript",
                    "Vue.js"
                ],
                cost : 150
            
            },
            {
                course : "Backend Programming",
                preview : 'php_preview.svg',
                level : "Beginner",
                languages : [
                    "PHP"
                ],
                cost : 300
            
            },        
            {
                course : "Databases",
                preview :'mysql_preview.svg',
                level : "Intermediate",
                languages : [
                    "MySQL",
                    "PHP"
                ],
                cost : 150
            
            },
            {
                course : "Mobile Apps",
                preview : 'pwa_preview.svg',
                level : "Intermediate",
                languages : [
                    "JavaScript",
                    "Node.js"
                ],
                cost : 150
            },

        ]
    },
     methods : {

        // Is called when user clicks on purchase button
        purchase(item) {

            let purchaseItem = JSON.stringify(item);
            console.log(purchaseItem)
            
            this.cart.contents.push(purchaseItem);

            localStorage.setItem("store-cart-items", this.cart.contents)

            //.log(this.cart.contents.length)
        }
     },
     computed : {
         cartLength : function() {
             return this.cart.contents.length
         }
     }

});


window.addEventListener('DOMContentLoaded', (event) => {
    
    if (localStorage.getItem("store-cart-items")) {

        app.cart.contents = localStorage.getItem("store-cart-items")
    }

    
});