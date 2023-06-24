class project{
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspecttiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const light = new THREE.DirectionalLight("#FF0000");
        light.position.set(0, 20, 10);
        const ambient = new THREE.AmibentLight("#ABF200");
        const material = new THREE.MeshphongMarterial({color : "#affaa00"});
        this.cube = new THREE.Mesh(geometry, material);
        this.camera.position.z = 5;
        this.scene.add(this.cube);
        this.scene.add(light);
        this.scene.add(ambient);
        this.animate();
    }
    animate(){
        const project = this;
        requestAnimationFrame(function(){project.animate();});
        this.renderer.render(this.scene, this.camera);
    }
}