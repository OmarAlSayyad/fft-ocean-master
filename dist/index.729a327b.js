THREE.OBJMTLLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.OBJMTLLoader.prototype={constructor:THREE.OBJMTLLoader,load:function(e,t,n,r,a){var s=this,o=new THREE.MTLLoader(e.substr(0,e.lastIndexOf("/")+1));o.crossOrigin=s.crossOrigin,o.load(t,function(t){t.preload();var o=new THREE.XHRLoader(s.manager);o.setCrossOrigin(s.crossOrigin),o.load(e,function(e){var r=s.parse(e);r.traverse(function(e){if(e instanceof THREE.Mesh&&e.material.name){var n=t.create(e.material.name);n&&(e.material=n)}}),n(r)},r,a)},r,a)},parse:function(e,t){function n(e,t,n){return new THREE.Vector3(e,t,n)}function r(e,t,n,r){return new THREE.Face3(e,t,n,r)}var a=0;function s(e,t){p.length>0&&(i.vertices=p,i.mergeVertices(),i.computeFaceNormals(),i.computeBoundingSphere(),d.add(c),i=new THREE.Geometry,c=new THREE.Mesh(i,l)),void 0!==e&&(c.name=e),void 0!==t&&((l=new THREE.MeshLambertMaterial).name=t,c.material=l)}var o=new THREE.Group,d=o,i=new THREE.Geometry,l=new THREE.MeshLambertMaterial,c=new THREE.Mesh(i,l),p=[],E=[],u=[];function f(e,t,n,s){void 0===s?i.faces.push(r(parseInt(e)-(a+1),parseInt(t)-(a+1),parseInt(n)-(a+1))):i.faces.push(r(parseInt(e)-(a+1),parseInt(t)-(a+1),parseInt(n)-(a+1),[E[parseInt(s[0])-1].clone(),E[parseInt(s[1])-1].clone(),E[parseInt(s[2])-1].clone()]))}function v(e,t,n){i.faceVertexUvs[0].push([u[parseInt(e)-1].clone(),u[parseInt(t)-1].clone(),u[parseInt(n)-1].clone()])}function T(e,t,n){void 0===e[3]?(f(e[0],e[1],e[2],n),void 0!==t&&t.length>0&&v(t[0],t[1],t[2])):(void 0!==n&&n.length>0?(f(e[0],e[1],e[3],[n[0],n[1],n[3]]),f(e[1],e[2],e[3],[n[1],n[2],n[3]])):(f(e[0],e[1],e[3]),f(e[1],e[2],e[3])),void 0!==t&&t.length>0&&(v(t[0],t[1],t[3]),v(t[1],t[2],t[3])))}for(var m=/v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,h=/vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,g=/vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,H=/f( +\d+)( +\d+)( +\d+)( +\d+)?/,R=/f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/,L=/f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/,M=/f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/,w=e.split("\n"),I=0;I<w.length;I++){var O,F,b,x=w[I];if(0!==(x=x.trim()).length&&"#"!==x.charAt(0)){if(null!==(b=m.exec(x)))p.push(n(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3])));else if(null!==(b=h.exec(x)))E.push(n(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3])));else if(null!==(b=g.exec(x)))u.push((O=parseFloat(b[1]),F=parseFloat(b[2]),new THREE.Vector2(O,F)));else if(null!==(b=H.exec(x)))T([b[1],b[2],b[3],b[4]]);else if(null!==(b=R.exec(x)))T([b[2],b[5],b[8],b[11]],[b[3],b[6],b[9],b[12]]);else if(null!==(b=L.exec(x)))T([b[2],b[6],b[10],b[14]],[b[3],b[7],b[11],b[15]],[b[4],b[8],b[12],b[16]]);else if(null!==(b=M.exec(x)))T([b[2],b[5],b[8],b[11]],[],[b[3],b[6],b[9],b[12]]);else if(/^o /.test(x))s(),a+=p.length,p=[],(d=new THREE.Object3D).name=x.substring(2).trim(),o.add(d);else if(/^g /.test(x))s(x.substring(2).trim(),void 0);else if(/^usemtl /.test(x))s(void 0,x.substring(7).trim());else if(/^mtllib /.test(x)){if(t){var y=x.substring(7);t(y=y.trim())}}else/^s /.test(x)||console.log("THREE.OBJMTLLoader: Unhandled line "+x)}}return s(void 0,void 0),o}},THREE.EventDispatcher.prototype.apply(THREE.OBJMTLLoader.prototype);
//# sourceMappingURL=index.729a327b.js.map