const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Handjet&family=Playfair+Display:ital@1&family=Quicksand&display=swap"
          rel="stylesheet">
      <title>Page 1</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
  
          body {
              background-color: rgb(3, 3, 34);
              color: white;
              font-family: 'EB Garamond', serif;
              font-family: 'Handjet', cursive;
              font-family: 'Playfair Display', serif;
              font-family: 'Quicksand', sans-serif;
          }
  
          nav {
              display: flex;
              justify-content: space-around;
              align-items: center;
              height: 70px;
              background-color: rgb(6, 6, 46);
          }
  
          nav ul {
              display: flex;
              justify-content: center;
          }
  
          nav ul li {
              list-style: none;
              margin: 0 23px;
              cursor: pointer;
          }
  
          nav ul li a {
              color: white;
              text-decoration: none;
          }
  
          nav ul li a:hover {
              color: rgb(188, 188, 240);
          }
  
  
          .logo {
              font-size: 2rem;
          }
  
          /* media queries LINE 66-82 */
  
          @media (max-width: 640px) {
              nav {
                  display: inline-flex;
                  text-align: center;
                  height: 100px;
                  width: max-content;
              }
  
              nav ul {
                  flex-direction: row;
              }
  
              nav li {
                  margin: 0.8em 0;
              }
          }
  
  
          .firstSection {
              display: flex;
              justify-content: space-around;
              margin: 35px 0px;
  
          }
  
          @media (max-width: 640px) {
              .firstSection {
                  display: inline-block;
              }
          }
  
          .leftSection {
              width: 30%;
              /* background-color: red; */
              font-size: 3.5rem;
              margin: 45px 37px;
          }
  
          @media (max-width: 640px) {
              .leftSection {
                  width: auto;
              }
  
              .leftSection div {
                  width: max-content;
              }
          }
  
          .rightSection {
              /* width: 30%; */
              /* background-color: red; */
              /* width: 100px */
          }
  
          .rightSection img {
              width: 450px;
              padding: 45px;
          }
  
          /* .purple{
              color: rgb(201, 155, 245);
          } */
          #element {
              color: rgb(201, 155, 245);
              font-size: xxx-large;
          }
  
          .btn {
              /* border: 2px solid red; */
              margin: 34px 15px;
          }
  
          .button1 {
              /* margin: 20px 30px; */
              background-color: rgb(1, 1, 34);
              color: white;
              height: 4rem;
              width: 8rem;
              border: none;
              font-size: xx-large;
              border: 2px solid white;
              border-radius: 6px;
          }
  
          .button1:hover {
              background-color: rgb(47, 47, 73);
              cursor: pointer;
          }
  
          main hr {
              border: 0;
              background-color: rgb(103, 107, 161);
              height: 1.2px;
              margin: 40px 85px;
          }
  
          .secondSection {
              max-width: 80vh;
              margin: auto;
          }
  
          .secondSection h1 {
              font-size: 1.9rem;
          }
  
          .text-grey {
              color: grey;
          }
  
          .container {
              display: flex;
              justify-content: space-around;
              border: 3px solid rgb(201, 201, 245);
              margin: 45px 190px;
              padding: 25px;
              background-color: rgb(76, 86, 109);
          }
  
          @media (max-width: 640px) {
              .container {
                  display: inline-block;
                  padding-top: 0px;
                  margin-left: 50px;
                  margin-right: auto;
              }
  
              .box {
                  margin-top: 2rem;
              }
          }
  
          .thead {
              text-align: center;
              font-size: xx-large;
              line-height: 2rem;
              color: aquamarine;
              padding: 2rem;
              padding: 5rem;
              width: 4rem;
              column-span: none;
              /* height: 15rem; */
          }
  
          .Datesfee tr td {
              border: 2px solid rgb(118, 236, 114);
              justify-content: center;
              /* width: 26rem; */
              font-size: large;
          }
  
          .datescol {
              width: 14rem;
              padding-left: 22px;
          }
  
          #feecol {
              width: 30rem;
              padding-left: 74px;
          }
  
          #r2 {
              display: flex;
              flex-wrap: wrap;
          }
  
          #r2>* {
              margin: 0 10px;
              flex: 1 1 200px;
          }
  
          /* .box {
              display: grid;
              grid-template-rows: 2rem 3rem;
              border: 2px solid red;
              height: 300px;
              margin-left: 4px;
              margin-right: 4px;
              background-color: rgb(236, 234, 236);
              overflow: scroll;
          } */
          /* .box {
              text-align: center;
              font-size: large;
              font-style: oblique;
              height: 730px;
              width: 450px;
              border: 2px solid red;
              background-color: rgb(192, 181, 214);
          } */
      </style>
  </head>
  
  <body>
      <header>
          <nav>
              <div class="logo">MD's Portfolio</div>
              <div class="nav">
                  <ul>
                      <li><a href="@">Home</a></li>
                      <li><a href="@">About</a></li>
                      <li><a href="@">Services</a></li>
                      <li><a href="@">Contact me</a></li>
                  </ul>
              </div>
          </nav>
      </header>
      <main>
          <section class="firstSection">
              <div class="leftSection">
                  Hello!
                  <div>I am a beginer </div>
                  <!-- <div class="purple">Web Developer</div> -->
                  <span id="element"></span>
                  <div class="btn">
                      <button class="button1" id="btn1">Signup</button>
                      <button class="button1">Signin</button>
                  </div>
              </div>
              <div class="rightSection">
                  <img src="bg.png" alt="pic">
              </div>
          </section>
          <hr>
          <section class="secondSection">
              <!-- <span class="text-grey">What I have done so far</span>
              <h1>Best of Luck</h1> -->
          </section>
          <div class="container">
              <h1>PAGE-!</h1>
          </div>
          <div class="container">
              <table>
                  <thead class="thead">
                      <tr>
                          <td>Uttar Pradesh Subordinate Service Selection Commission (UPSSSC)</td>
                      </tr>
                      <tr>
                          <td>UPSSSC Stenographer Recruitment 2023 Mains Exam</td>
                      </tr>
                      <tr>
                          <td>UPSSSC Steno Advt No. : 09-Exam/2023 Short Details of Notification</td>
                      </tr>
                  </thead>
              </table>
          </div>
          <div class="container">
              <table border="2">
                  <thead class="Datesfee">
                      <tr>
                          <td class="datescol">
                              <ul>
                                  <h2>Important Dates</h2>
                                  <li>Application Begin : 17/10/2023</li>
                                  <li>Last Date for Registration : 06/11/2023</li>
                                  <li>Fee Payment Last Date : 06/11/2023</li>
                                  <li>Correction Last Date : 15/11/2023</li>
                                  <li>Exam Date : As per Schedule</li>
                                  <li>Admit Card Available : Before Exam</li>
                              </ul>
                          </td>
                          <td id="feecol">
                              <ul>
                                  <h2>Application Fee</h2>
                                  <li>General / OBC / EWS : 25/-</li>
                                  <li>SC / ST : 25/-</li>
                                  <li>PH (Dviyang) : 25/-</li>
                                  <li>Pay the Examination Fee Through State Bank of India SBI I Collect Fee Mode or Pay
                                      the Exam Fee Through E Challan</li>
                              </ul>
                          </td>
                      </tr>
                      <tr>
                          <td id="r2">
                              <ul>
                                  <h1>UPSSSC Stenogrpaher Notification 2023 : Age Limit as on 01/07/2023</h1>
                                  <li>Minimum Age : 18 Years</li>
                                  <li>Maximum Age : 40 Years</li>
                                  <li>Age Relaxation Extra as per UPSSSC UP Stenographer Recruitment Advt No. 09/2023
                                      Rules</li>
                              </ul>
                          </td>
                      </tr>
                      <tr></tr>
                  </thead>
  
              </table>
          </div>
  
          <!-- <ul>
              <li><a href="">SSC CGL 2023 Vacancy Details</a></li>
          </ul>
      </div> -->
  
      </main>
  
      <!-- Load library from the CDN -->
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
  
      <!-- Setup and start animation! -->
      <script>
          var typed = new Typed('#element', {
              strings: ['Web Developer'],
              typeSpeed: 60,
          });
      </script>
  
  </body>
  
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});