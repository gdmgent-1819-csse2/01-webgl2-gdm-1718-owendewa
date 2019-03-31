import Vector2 from './Math/Vector2.js'

/** Class representing a canvas element for WebGL2 */
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
        }
        this.data = {
            colors: [],
            positions: [],
        }

        this.gl = null
        this.program = null
        this.run()

        window.addEventListener('updateCanvas', event => {
            // loop the updatecanvashanlder every .5 seconds
            setInterval(() =>{
                try{
                    this.updateCanvasHandler(event)
                }
                catch(err) {
                    console.log(err.message);
                }
            },500)
        }, false);

    }
    updateCanvasHandler(event) {
        console.log('updateCanvas')
        this.clearData()
        // White point in the middle
        const v_0 = new Vector2(0,0);
        this.data.positions.push(v_0.x, v_0.y)
        this.data.colors.push(...this.colors.white)
        //Creating seconds vectors
        const v1 = new Vector2(0, 0.9)
        this.data.positions.push(v1.x, v1.y)
        this.data.colors.push(...this.colors.black)
        const v1_2 = new Vector2(0, 0.5)
        this.data.positions.push(v1_2.x, v1_2.y)
        this.data.colors.push(...this.colors.black)
        const v1_3 = new Vector2(0, 0.1)
        this.data.positions.push(v1_3.x, v1_3.y)
        this.data.colors.push(...this.colors.black)
        //Creating minute vectors
        const v2 = new Vector2(0, 0.7)
        this.data.positions.push(v2.x, v2.y)
        this.data.colors.push(...this.colors.black)
        const v2_2 = new Vector2(0, 0.4)
        this.data.positions.push(v2_2.x, v2_2.y)
        this.data.colors.push(...this.colors.black)
        const v2_3 = new Vector2(0, 0.1)
        this.data.positions.push(v2_3.x, v2_3.y)
        this.data.colors.push(...this.colors.black)
        //Creating hour vectors
        const v3 = new Vector2(0, 0.3)
        this.data.positions.push(v3.x, v3.y)
        this.data.colors.push(...this.colors.black)
        const v3_2 = new Vector2(0, 0.1)
        this.data.positions.push(v3_2.x, v3_2.y)
        this.data.colors.push(...this.colors.black)
        //Creating date arm
        const d = new Date();
        const Seconds = d.getSeconds();
        const Minutes = d.getMinutes();
        const Hours = d.getHours();
        const time = Hours + ':' + Minutes + ':' + Seconds
        document.getElementById('clock').innerHTML = time
        const colors = [
            'white',
        ]
        colors.forEach(color => {
            //Creating seconds arm
            v1.rot((Seconds* 6))
            this.data.positions.push(v1.x, v1.y)
            this.data.colors.push(...this.colors[color])
            v1_2.rot((Seconds* 6))
            this.data.positions.push(v1_2.x, v1_2.y)
            this.data.colors.push(...this.colors[color])
            v1_3.rot((Seconds* 6))
            this.data.positions.push(v1_3.x, v1_3.y)
            this.data.colors.push(...this.colors[color])
            //Creating minute arm
            v2.rot((Minutes* 6))
            this.data.positions.push(v2.x, v2.y)
            this.data.colors.push(...this.colors[color])
            v2_2.rot((Minutes* 6))
            this.data.positions.push(v2_2.x, v2_2.y)
            this.data.colors.push(...this.colors[color])
            v2_3.rot((Minutes* 6))
            this.data.positions.push(v2_3.x, v2_3.y)
            this.data.colors.push(...this.colors[color])
            //Creating hour arm
            v3.rot((Hours * 6 * 5) + (Minutes * 6 / 12) * (Math.PI/180));
            this.data.positions.push(v3.x, v3.y)
            this.data.colors.push(...this.colors[color])
            v3_2.rot((Hours * 6 * 5) + (Minutes * 6 / 12) * (Math.PI/180));
            this.data.positions.push(v3_2.x, v3_2.y)
            this.data.colors.push(...this.colors[color]) 
        });
        this.drawScene();
    }

    run() {
        try {
            this.createCanvas()
            this.createShaders()
            this.createProgram()
            this.createVertexArray()
            // Initial drawing on the canvas
            {
                // Random points
                for (let i = 0, max = 100000; i < max; i++) {
                    this.data.positions.push(Math.random() * 2 - 1, Math.random() * 2 - 1)
                    this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)
                }
                // White point in the middle.
                this.data.positions.push(0, 0)
                this.data.colors.push(...this.colors.white)
            }
            this.drawScene()

        } catch (error) {
            console.error(error)
        }
    }

    clearData() {
        this.data = {
            colors: [],
            positions: [],
        }
    }

    createBuffers() {
        this.createBuffer('COLOR')
        this.createBuffer('POSITION')
    }

    createBuffer(bufferType) {
        const gl = this.gl
        const program = this.program

        let name // Name of attribute used in GLSL.
        let normalized // Should it be normalized to a value between 0 and 1.
        let size // Number of components per vertex attribute, can be 1 through 4.
        let srcData
        let type // Datatype.
        const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position.
        const offset = 0 // Start at the beginning of the buffer.

        switch (bufferType) {
            case 'COLOR':
                name = 'a_VertexColor'
                normalized = true
                size = 4
                srcData = new Uint8Array(this.data.colors)
                type = gl.UNSIGNED_BYTE // Integer from 0 through 255.
                break
            case 'POSITION':
                name = 'a_VertexPosition'
                normalized = false
                size = 2
                srcData = new Float32Array(this.data.positions)
                type = gl.FLOAT
                break
            default:
                return null
        }

        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, srcData, gl.STATIC_DRAW)

        const index = gl.getAttribLocation(program, name)
        gl.enableVertexAttribArray(index)
        gl.vertexAttribPointer(index, size, type, normalized, stride, offset) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
    }

    createCanvas() {
        const canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
        canvas.height = this.height
        canvas.width = this.width
        const gl = this.gl = canvas.getContext('webgl2')
        gl.clearColor(0, 0, 0, 0) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport
    }

    createProgram() {
        const gl = this.gl

        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)

        const success = gl.getProgramParameter(program, gl.LINK_STATUS)
        if (success) {
            this.program = program
            gl.useProgram(program)
        } else {
            console.error(gl.getProgramInfoLog(program))
            gl.deleteProgram(program)
        }
    }

    createShaders() {
        const gl = this.gl

        this.vertexShader = this.createShader(gl.VERTEX_SHADER)
        this.fragmentShader = this.createShader(gl.FRAGMENT_SHADER)
    }

    createShader(type) {
        const gl = this.gl

        let source
        switch (type) {
            case gl.FRAGMENT_SHADER:
                source = this.shaderSources.fragment
                break
            case gl.VERTEX_SHADER:
                source = this.shaderSources.vertex
                break
            default:
                console.error('Shader type does not exist.')
                return null
        }

        const shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (success) {
            return shader
        }
        console.error(type, gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
    }

    createVertexArray() {
        const gl = this.gl

        const vertexArray = gl.createVertexArray()
        gl.bindVertexArray(vertexArray)
    }

    drawScene() {
        const gl = this.gl

        this.createBuffers()

        gl.clear(gl.COLOR_BUFFER_BIT) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear

        const modes = [ // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives
            gl.POINTS,
            gl.LINES,
            gl.LINE_STRIP,
            gl.LINE_LOOP,
            gl.TRIANGLES,
            gl.TRIANGLE_STRIP,
            gl.TRIANGLE_FAN,
        ]
        const dimensions = 2
        const mode = modes[0]
        const first = 0
        const count = this.data.positions.length / dimensions
        gl.drawArrays(mode, first, count) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays
    }
}