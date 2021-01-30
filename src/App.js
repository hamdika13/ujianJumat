


import React,{Component} from 'react'
import {data} from './model/Model'
import TextArea from './component/TextArea'
import RadioButton from './component/RadioButton'
import CheckBox from './component/CheckBox'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {jawabanSoal : []}

  }

  addJawaban =(jawaban) => {
let newJawaban = this.state.jawabanSoal.filter((value)=>{return value.soal_no !== jawaban.soal_no})
newJawaban.push(jawaban)
console.log("isi newJawaban" + JSON.stringify(newJawaban))
this.setState({jawabanSoal : newJawaban})


    // let tempJawab = this.state.jawabanSoal;
    // tempJawab.push(jawaban)
    this.setState({newJawaban});
  }

  render () {
    return (
      <div>
        <form>
      <p>{JSON.stringify(this.state.jawabanSoal)}</p>
          {data.map((nilai,i)=> {
            if(nilai.type === "essay") {
              return <TextArea soal= {nilai.soal} key= {i}/>

            } else if(nilai.type === "radio") {
              return <RadioButton data ={nilai}/>
            }else if(nilai.type === "checkBox") {
              return <CheckBox data ={nilai}/>
            }
          })
        }

        </form>



        <form>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>choose</option>
  <option value="1">radio</option>
  <option value="2">checkbox</option>
  <option value="3">textarea</option>
</select>
<br></br>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">soal :</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">siapakah Pelatih juara koding</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">jawab : A</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Dewabrata</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">jawab : B</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">chelsea Islan</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">jawab : C</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Raisa</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">jawab : D</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Nathasa Wilona</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">kunci :</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">A</textarea>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">score : </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">10</textarea>
</div>
        </form>
        <button type="button" class="btn btn-dark">Submit</button>
      </div>
    )
  }
}
export default App;