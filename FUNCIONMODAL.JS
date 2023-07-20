<!-- Código JavaScript -->
<script>
    // Componente pop-up
    var popUp = Vue.component("pop-up", {
        methods: {
            close() {
                this.$emit('close');
            }
        },
        template: `
            <div class="pop-up">
                <div class="pop-up-inner">
                    <div class="pop-up-close" @click="close()">
                        &times;
                    </div>
                    <!-- Contenido del pop-up -->
                    <slot></slot>
                </div>
            </div>
        `
    });

    // Vue Instance
    new Vue({
        el: "#app",
        components: {
            "pop-up": popUp
        },
        data: () => ({
            popUp: false
        }),
        methods: {
            togglePopUp() {
                this.popUp = !this.popUp;
            }
        }
    });
</script>
