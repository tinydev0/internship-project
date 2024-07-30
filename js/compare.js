document.querySelector("button").addEventListener("click", function() {
    let selectedModel1 = document.getElementsByTagName('select')[0].value;
    let selectedModel2 = document.getElementsByTagName('select')[1].value;
    let model1 = ["1.8Kwh","LFP with 1500 cycles Active Balancing Waterproof(IP67)","3 years","3 hours (12A)","1500W","55 km/hr","1yr","100km","90 km","60 km","Range prediction"];
    let model2 = ["2.7Kwh","LFP with 1500 cycles Active Balancing Waterproof(IP67)","3 years","4 hours (12A)","1500W","55 km/hr","1yr","150km","110 km","90 km","comfortable ride"];
    let model3 = ["2.7Kwh","LFP with 1500 cycles Active Balancing Waterproof(IP67)","3 years","4 hours (12A)","2000W","65 km/hr","1yr","120km","100 km","80 km","Fire-safe battery"];
    if((selectedModel1 == "Rhyno SE03 Lite" ||selectedModel1 == "Rhyno SE03" || selectedModel1 == "Rhyno SE03 Max") && (selectedModel2 == "Rhyno SE03" || selectedModel2=="Rhyno SE03 Lite" || selectedModel2 == "Rhyno SE03 Max")){ 
      if (selectedModel1=="Rhyno SE03 Lite" && selectedModel2 =="Rhyno SE03") {
        document.getElementsByClassName("pr-table")[0].innerHTML = ` <table class="glass">
        <thead>
          <tr>
              <th>specifications</th>
              <th>${selectedModel1}</th>
              <th>${selectedModel2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Battery</td>
              <td> ${model1[0]}</td>
              <td> ${model2[0]}</td>
            </tr>
            <tr>
              <td> Battery
              features</td>
              <td> ${model1[1]}</td>
              <td> ${model2[1]}</td>
            </tr>
            <tr>
              <td> Battery
              warranty
              </td>
              <td> ${model1[2]}</td>
              <td> ${model2[2]}</td>
            </tr>
            <tr>
              <td> Charging time</td>
              <td> ${model1[3]}</td>
              <td> ${model2[3]}</td>
            </tr>
            <tr>
              <td> motor</td>
              <td> ${model1[4]}</td>
              <td> ${model2[4]}</td>
            </tr>
            <tr>
              <td> Max Speed</td>
              <td> ${model1[5]}</td>
              <td> ${model2[5]}</td>
            </tr>
            <tr>
              <td> warranty on electronics</td>
              <td> ${model1[6]}</td>
              <td> ${model2[6]}</td>
            </tr>
            <tr>
              <td> Max range (@ 30km/hr)</td>
              <td> ${model1[7]}</td>
              <td> ${model2[7]}</td>
            </tr>
            <tr>
              <td> Max range (@ 45km/hr)</td>
              <td> ${model1[8]}</td>
              <td> ${model2[8]}</td>
            </tr>
            <tr>
              <td> Max range (@ full speed)</td>
              <td> ${model1[9]}</td>
              <td> ${model2[9]}</td>
            </tr>
            <tr>
              <td> Other key benefits</td>
              <td> ${model1[10]}</td>
              <td> ${model2[10]}</td>
            </tr>
          </tbody>
        </table>
      `;
      }
      
      else if(selectedModel1=="Rhyno SE03 Lite" && selectedModel2 =="Rhyno SE03 Max"){
        document.getElementsByClassName("pr-table")[0].innerHTML = ` <table class="glass">
        <thead>
          <tr>
              <th>specifications</th>
              <th>${selectedModel1}</th>
              <th>${selectedModel2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Battery</td>
              <td> ${model1[0]}</td>
              <td> ${model3[0]}</td>
            </tr>
            <tr>
              <td> Battery
              features</td>
              <td> ${model1[1]}</td>
              <td> ${model3[1]}</td>
            </tr>
            <tr>
              <td> Battery
              warranty
              </td>
              <td> ${model1[2]}</td>
              <td> ${model3[2]}</td>
            </tr>
            <tr>
              <td> Charging time</td>
              <td> ${model1[3]}</td>
              <td> ${model3[3]}</td>
            </tr>
            <tr>
              <td> motor</td>
              <td> ${model1[4]}</td>
              <td> ${model3[4]}</td>
            </tr>
            <tr>
              <td> Max Speed</td>
              <td> ${model1[5]}</td>
              <td> ${model3[5]}</td>
            </tr>
            <tr>
              <td> warranty on electronics</td>
              <td> ${model1[6]}</td>
              <td> ${model3[6]}</td>
            </tr>
            <tr>
              <td> Max range (@ 30km/hr)</td>
              <td> ${model1[7]}</td>
              <td> ${model3[7]}</td>
            </tr>
            <tr>
              <td> Max range (@ 45km/hr)</td>
              <td> ${model1[8]}</td>
              <td> ${model3[8]}</td>
            </tr>
            <tr>
              <td> Max range (@ full speed)</td>
              <td> ${model1[9]}</td>
              <td> ${model3[9]}</td>
            </tr>
            <tr>
              <td> Other key benefits</td>
              <td> ${model1[10]}</td>
              <td> ${model3[10]}</td>
            </tr>
          </tbody>
        </table>
      `;
      }
      else if(selectedModel1=="Rhyno SE03" && selectedModel2 =="Rhyno SE03 Max"){
        document.getElementsByClassName("pr-table")[0].innerHTML = ` <table class="glass">
        <thead>
          <tr>
              <th>specifications</th>
              <th>${selectedModel1}</th>
              <th>${selectedModel2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Battery</td>
              <td> ${model2[0]}</td>
              <td> ${model3[0]}</td>
            </tr>
            <tr>
              <td> Battery
              features</td>
              <td> ${model2[1]}</td>
              <td> ${model3[1]}</td>
            </tr>
            <tr>
              <td> Battery
              warranty
              </td>
              <td> ${model2[2]}</td>
              <td> ${model3[2]}</td>
            </tr>
            <tr>
              <td> Charging time</td>
              <td> ${model2[3]}</td>
              <td> ${model3[3]}</td>
            </tr>
            <tr>
              <td> motor</td>
              <td> ${model2[4]}</td>
              <td> ${model3[4]}</td>
            </tr>
            <tr>
              <td> Max Speed</td>
              <td> ${model2[5]}</td>
              <td> ${model3[5]}</td>
            </tr>
            <tr>
              <td> warranty on electronics</td>
              <td> ${model2[6]}</td>
              <td> ${model3[6]}</td>
            </tr>
            <tr>
              <td> Max range (@ 30km/hr)</td>
              <td> ${model2[7]}</td>
              <td> ${model3[7]}</td>
            </tr>
            <tr>
              <td> Max range (@ 45km/hr)</td>
              <td> ${model2[8]}</td>
              <td> ${model3[8]}</td>
            </tr>
            <tr>
              <td> Max range (@ full speed)</td>
              <td> ${model2[9]}</td>
              <td> ${model3[9]}</td>
            </tr>
            <tr>
              <td> Other key benefits</td>
              <td> ${model2[10]}</td>
              <td> ${model2[10]}</td>
            </tr>
          </tbody>
        </table>
      `;
      }
    }
  });


  // (1,2)(1,3)(2,3)