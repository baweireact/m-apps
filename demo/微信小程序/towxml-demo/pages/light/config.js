const getMdData = () => {
    return `
## 公式
$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$。
$$x = {{ - b \\pm \\sqrt {{b^2} - 4ac} } \\over {2a}}$$
$$\\sqrt{2} =\\frac{1}{3}$$
`
}

const getHtmlData = () => {
    return `
<div style="color:red;font-size:30px;">HTML</div>
<latex value="x = {b^2-4ac}" type="line"></latex>
<div>
<math xmlns="http://www.w3.org/1998/Math/MathML">
		
<mrow>
   <msup><mi>a</mi><mn>2</mn></msup>
   <mo>+</mo>

   <msup><mi>b</mi><mn>2</mn></msup>
   <mo>=</mo>

   <msup><mi>c</mi><mn>2</mn></msup>
</mrow>

</math>
</div>
`
}

module.exports = {
    getMdData,
    getHtmlData,
}