THREE.ShaderLib.cloud={uniforms:{texture:{type:"t",value:null},time:{type:"f",value:1},sharp:{type:"f",value:.9},cover:{type:"f",value:.5},clouds:{type:"f",value:1},depth:{type:"f",value:0}},vertexShader:"uniform sampler2D texture;\nuniform float time;\nvarying vec2 vUv;\nvoid main()\n{\nvUv = uv;\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float time;\nuniform float depth;\nuniform float sharp;\nuniform float cover;\nuniform float clouds;\nuniform sampler2D texture;\nvarying vec2 vUv;\nvec3 noise3(vec2 p) {\n	return texture2D(texture, p).xyz;\n}\nvec3 fNoise(vec2 uv) {\n	vec3 f = vec3(0.);\n	float scale = 1.;\n	for (int i=0; i<5; i++) {\n		scale *= 2.;\n		f += noise3(uv * scale) / scale;\n	}\n	return f;\n}\nvoid main(void)\n{\n	vec2 uv = vUv;\n	vec3 ff1 = fNoise(uv * 0.01 + time * 0.00015 * vec2(-1., 1.));\n	vec3 ff2 = fNoise(uv * 0.1 + time * 0.0005 * vec2(1., 1.));\n	float t = ff1.x * 0.9 + ff1.y * 0.15;\n	t = t * 0.99 + ff2.x * 0.01;\n	float o = clamp ( length(uv * 2.0 - vec2(1., 1.)), 0., 1. );\n	o =  1. - o * o * o * o;\n	o -= (1. - t) * 0.95;\n	t = max(t - (1. - cover), 0.);\n	t = 1. - pow(1. - sharp, t);\n	t = min(t * 1.9, 1.0);\n	if (depth > 0.) {\n		if (o < 0.4 && t < 0.8) discard;\n		gl_FragData[ 0 ] = vec4(gl_FragCoord.z, 1., 1., 1.);\n	}\n	else {\n		gl_FragData[ 0 ] = vec4(t, t, t, o );\n	}\n}"};
//# sourceMappingURL=index.a218982c.js.map
