<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="chrome=1" />
  <title>Hmv Docs</title>
  <meta name="viewport" content="width=device-width" />

  <link rel="stylesheet" href="hmv-doc.css" />
  <style>
  /* CUSTOM */

@font-face {
  font-family: 'mvtyper';
  src: url('../fonts/mvtyper-mod2.woff2');
}
  /* ../ is parent dir
  
  Starting with / returns to the root directory and starts there

Starting with ../ moves one directory backward and starts there

Starting with ../../ moves two directories backward and starts there (and so on...)

To move forward, just start with the first sub directory and keep moving forward.
*/

.hmv {
  width: 200px;
  height: 200px;
}

.badge {
  width: 250px;
}

p {
  text-align: justify;
}

.mid,
.mid p {
  text-align: center;
}

.dv {
  direction: rtl;
  font-family: 'mvtyper';
  line-height: 2;
}

h2, h3 {
  line-height: 2;
}

.dv blockquote {
  border-left: none;
  border-right: 1px solid #e5e5e5;
  margin: 0;
  padding: 0 20px 0 0;
}

.dvTable th,
.dvTable td {
  text-align: right;
  direction: rtl;
  text-align: center;
}

th,
td {
  text-align: center;
}

.ind {
  text-indent: 2em;
}


/*==============END OF CUSTOM
=============================*/


body {
  background-color: #fff;
  padding: 50px;
  font: 14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #595959;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  color: #222;
  margin: 0 0 20px;
}

p, ul, ol, table,/* pre, dl*/ {
  margin: 0 0 20px;
}
/*
h1, h2, h3 {
  line-height: 1.1;
}
*/
h1 {
  font-size: 28px;
  font-weight: 500;
}

h2 {
  color: #393939;
  font-weight: 500;
}

h3, h4, h5, h6 {
  color: #494949;
  font-weight: 500;
}

a {
  color: #39c;
  text-decoration: none;
}

a:hover {
  color: #069;
}

a small {
  font-size: 11px;
  color: #777;
  margin-top: -0.3em;
  display: block;
}

a:hover small {
  color: #777;
}

.wrapper {
  width: 860px;
  margin: 0 auto;
}

blockquote {
  border-left: 1px solid #e5e5e5;
  margin: 0;
  padding: 0 0 0 20px;
  /*font-style: italic;*/
}
/*
code, pre {
  font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal, Consolas, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;
  color: #333;
}

pre {
  padding: 8px 15px;
  background: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  overflow-x: auto;
}
*/
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 5px 10px;
  border-bottom: 1px solid #e5e5e5;
}

dt {
  color: #444;
  font-weight: 500;
}

th {
  color: #444;
}

img {
  max-width: 100%;
}

/*
header {
width                 :270px;
float                 :left;
position              :fixed;
-webkit-font-smoothing:subpixel-antialiased;
}

header ul {
list-style   :none;
height       :40px;
padding      :0;
background   : #f4f4f4;
border-radius:5px;
border       :1px solid #e0e0e0;
width        :270px;
}

header li {
width       :89px;
float       :left;
border-right:1px solid #e0e0e0;
height      :40px;
}

header li:first-child a {
border-radius:5px 0 0 5px;
}

header li:last-child a {
border-radius:0 5px 5px 0;
}

header ul a {
line-height:1;
font-size  :11px;
color      :#999;
display    :block;
text-align :center;
padding-top:6px;
height     :34px;
}

header ul a:hover {
color:#999;
}

header ul a:active {
background-color:#f0f0f0;
}
*/

strong {
  color: #222;
  font-weight: 500;
}

/*
header ul li + li + li {
border-right:none;
width       :89px;
}

header ul a strong {
font-size:14px;
display  :block;
color    :#222;
}

section {
width         :500px;
float         :right;
padding-bottom:50px;
}
*/
/*
small {
  font-size: 11px;
}
*/
hr {
  border: 0;
  background: #e5e5e5;
  height: 1px;
  margin: 0 0 20px;
}

/*
footer {
width                 :270px;
float                 :left;
position              :fixed;
bottom                :50px;
-webkit-font-smoothing:subpixel-antialiased;
}
*/

@media print, screen and (max-width: 960px) {
  div.wrapper {
    width: auto;
    margin: 0;
  }
  /*
header, section, footer {
float   :none;
position:static;
width   :auto;
}

header {
padding-right:320px;
}

section {
border      :1px solid #e5e5e5;
border-width:1px 0;
padding     :20px 0;
margin      :0 0 20px;
}

header a small {
display:inline;
}

header ul {
position:absolute;
right   :50px;
top     :52px;
}
}

@media print, screen and (max-width: 720px) {
body {
word-wrap:break-word;
}

header {
padding:0;
}

header ul, header p.view {
position:static;
}

pre, code {
word-wrap:normal;
}
}

@media print, screen and (max-width: 480px) {
body {
padding:15px;
}

header ul {
width:99%;
}

header li, header ul li + li + li {
width:33%;
}
}
*/
  @media print {
    body {
      padding: 0.4in;
      font-size: 12pt;
      color: #444;
    }
  }
</style>
  <!--
    https://github.com/orderedlist/minimal
    -->
</head>

<body>
  <div class="wrapper">
    <!-- 
      <header>
        <h1>Minimal</h1>
        <p>A Theme for GitHub Pages</p>
        <p class="view"><a href="http://github.com/orderedlist/minimal">View the Project on GitHub <small>orderedlist/minimal</small></a></p>
        <ul>
          <li><a href="https://github.com/orderedlist/minimal/zipball/master">Download <strong>ZIP File</strong></a></li>
          <li><a href="https://github.com/orderedlist/minimal/tarball/master">Download <strong>TAR Ball</strong></a></li>
          <li><a href="http://github.com/orderedlist/minimal">Fork On <strong>GitHub</strong></a></li>
        </ul>
	  </header>

	  =======================moved stuff between here===================

      <section>

	</section>
	<footer>
	  <p>This project is maintained by <a href="http://github.com/orderedlist">Steve Smith</a></p>
	  <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
	</footer>

      -->


    <div class="mid">
      <h1>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      <br />
      <a href="https://hadithmv.github.io"><img class="hmv"
          src="https://hadithmv.github.io/img/newLogo5/newLogo5-compressor.svg"></a>
      <br /><br />
      <h2>Hadithmv - Accessible and Sourced</h2>
      <p>Dhivehi Hadith translations at your fingertips</p>

      <p>View the<strong><a href="http://hadithmv.github.io"> web version</strong></a>, or</p>

      <a href="https://play.google.com/store/apps/details?id=com.hadithmv.hmv"><img class="badge"
          src="https://hadithmv.github.io/img/playstore-badge/en_badge_web_generic-compressor.png"></a>

      <a href="https://github.com/hadithmv/hadithmv.github.io/raw/master/alt/Desktop/hmv-win.zip"><img class="badge"
          src="https://hadithmv.github.io/img/windows-desktop-badge/windows-badge-compressor.png"></a>

    </div>

    <br /><br />






    <p class="mid"><i>- In the Name of Allah, the Entirely Merciful, the Especially Merciful -</i></p>
    <br />
    <h3><b>Developing a Hadith App for Maldivians</b></h3>
    <p class="ind">The <b>Hmv</b> project is a collaborated effort in making the sayings and teachings of Muhammad ﷺ as
      accessible
      and understandable as possible for the Muslim Maldivian community. Once this work is complete, they will have a
      Hadith collection in their native language, Dhivehi. Any good is from Allah, and any shortcomings are from
      ourselves and shaithan.</p>

    <br>

    <h2>Goals</h2>
    <hr />

    <h3><b>Accessible</b></h3>
    <blockquote>
      <p>Bring the Hadith of Allah's Prophet ﷺ within the reach of everyone, regardless of the barriers of medium,
        location, portability, age, language or wealth. And use the platform of modern technology to help spread and
        instill the love of living according to the Sunnah in the hearts, as today's Maldivians are closer to their
        personal devices than they are to books.</p>
    </blockquote>
    <br />

    <h3><b>Educational</b></h3>
    <blockquote>
      <p>The cause of most of our society's problems is due to people being uneducated about Islam. To solve this
        redundant issue, they need a way to access Islamic material they can look up for themselves. Also, teachers and
        students alike can benefit from these references, without having to repeat the translate process every time.</p>
    </blockquote>
    <br />

    <h3><b>Progressive</b></h3>
    <blockquote>
      <p>It is Allah who has subjected technology for us to use. We aim to provide a feature-rich yet user-friendly
        product for everyone, while maintaining a compatible user experience over varying devices and configurations.
        Hmv is designed to be mobile-first with minimal bloat. Currently both web and Android are supported.</p>
    </blockquote>





    <br>


    <h2>Milestones</h2>



    <table>
      <tbody>
        <tr>
          <th>Hadith</th>
          <th>Progress</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>40 Nawawi</td>
          <td>Complete</td>
          <td>2/3/2018</td>
        </tr>
      </tbody>
    </table>





    <br><br><br>


    <div class="dv">
      <!-- DHIV FONT CHANGE123 -->

      <p class="mid">- ރަޙްމާން ވަންތަ ރަޙީމް ވަންތަ ﷲ ގެ އިސްމުފުޅުން ފަށައިގަންނަމެވެ -</p>
      <br />

      <h3><b>ޙަދީޘް އެމް.ވީ. - ދިވެހިންނަށް ޙަދީޘް އެޕްލިކޭޝަނެއް އުފެއްދުން</b></h3>


      <p class="ind">ޙަދީޘް އެމް.ވީ. މަޝްރޫޢަކީ އިސްލާމީ ދިވެހި މުޖުތަމަޢަށް ވީހާވެސް ފަސޭހަ ކަމާއިއެކު ރަސޫލު ﷲ ﷺ ގެ
        ޙަދީޘްފުޅުތަަކުގެ މާނަ އުނގަންނައިދީ ފޯރުކޮށް ދިނުމަށް ޓަކައި ވަސީލަތެއް ގާއިމު ކުރުމުގެ ގޮތުން ކުރެވޭ
        މަސައްކަތެކެވެ. މި މަސައްކަތް ފުރިހަމަ ވުމުން ގިނަ އަދަދެއްގެ ހަދީޘްތަކެއް ދިވެހި ބަހުން އެއްތަނަކުން ފަސޭހައިން
        ލިބެން ހުންނާނެއެވެ. މި ކަމުގައި އެއްވެސް ހެޔޮކަމެއް ވާނަމަ، ފަހެ އެއީ ﷲ ގެ ޙަޟްރަތުން އައި ކަމެކެވެ. އަދި މި
        ކަމުގައި އެއްވެސް އުނިކަމެއް ވާނަމަ އެއީ އަޅުގަނޑުމެންނާއި ޝައިޠާނާގެ ފަރާތުން އައި ކަމެކެވެ.</p>

      <br>

      <h2>އަމާޒު</h2>
      <hr />

      <h3><b>ފޯރުކޮށްދިނުން</b></h3>
      <blockquote>
        <p>ގެންގުޅޭ ވަޞީލަތްތަކާއި، އުޅޭ ތަނާއި، އުމުރާއި، ބަސްމޮށުންތެރިކަމާއި ތަނަވަސްކަން ނެތުމުގެ ސަބަބުން
          ކުރިމަތިވެފައިވާ ހުރަސްތައް ފަހަނައަޅައި، ރަސޫލު ﷲ ﷺ ގެ ޙަދީޘްފުޅުތައް އެންމެންނާއި ހަމައަށް ފޯރުކޮށް
          ދިނުމެވެ. އަދި މި ޒަމާނަކީ ފޮތްތަކަށް ވުރެން ބޮޑަށް ފޯނާއި ކޮމްޕިޔުޓަރ ފަދަ ވަސީލަތްތަކަށް ދިވެހިން
          އަހުލުވެރި ވެފައިވާ ޒަމާނެއް ކަމުން، އަދުގެ ޓެކްނޮލަޖީގެ ޒަރިއްޔާއިން ސުންނަތް ފަތުރައި އެއާ އެއްގޮތަށް
          އުޅުމުގެ ލޯބި ހިތްތަކުގައި ޖެއްސުމެވެ.</p>
      </blockquote>
      <br />

      <h3><b>އުނގަންނައިދިނުން</b></h3>
      <blockquote>


        <p>މި ކުޑަކުޑަ މުޖުތަމަޢުގެ ގިނަ މައްސަލަތަކުގެ މައިގަނޑު ސަބަބަކީ މީސްތަކުން އިސްލާމް ދީނަށް ރަނގަޅަށް
          އަހުލުވެރި ވެފައި ނުވުމެވެ. ވީމާ މި ކަމަށް ޙައްލެއް ގެނައުމަށް ޓަކައި އަމިއްލައަށް އިސްލާމީ މަޢުލޫމާތު
          ބަލައި ހޯދޭނެ ފަސޭހަ މަގެއް މީސްތަކުންނަށް ތަނަވަސްވެފައި އޮތުން މުހިންމެވެ. ހަމަ އެހެންމެ، މުދައްރިސުންނާއި
          ދަރިވަރުން މި މަސްދަރުތަކުގެ ބޭނުން ހިފައި، އެއް ޙަދީޘްތަކެއް ތަކުރާރުކޮށް ތަރުޖަމާ ކުރުމުގެ ބުރައިން
          ސަލާމަތް ވެގެން ދާނެއެވެ.</p>
      </blockquote>
      <br />

      <h3><b>ތަރައްޤީވުން</b></h3>
      <blockquote>
        <p>އަޅުގަނޑުމެންނަށް ޓަކައި ޓެކްނޮލޮޖީގެ ޚިދުމަތް ލައްވައި އޭގެ ބޭނުން ކުރެވޭނެ ގޮތް މިންވަރު ކުރެއްވީ ﷲ އެވެ.
          އަޅުގަނޑުމެންގެ އަމާޒަކީ ގިނަގުނަ ބޭނުންތައް ހިފޭ، ބޭނުން ކުރަން ފަސޭހަ އެޕްލިކޭޝަނެއް އެންމެންނަށް ފޯރުކޮށް
          ދިނުމެވެ. އަދި ގެންގުޅޭ ވަސީލަތްތަކާއި އުސްލޫބު ތަފާތު ވިޔެއްކަމަކު، ބޭނުން ކުރާ ފަރާތްތަކަށް އެކަށީގެންވާ
          ހިތްގައިމު މާހައުލެއް ޤާއިމުކޮށް ދިނުމެވެ. ޙަދީޘް އެމް.ވީ. ފަރުމާ ކުރެވިފައި ވަނީ ފޯނަށް އަހަންމިއްޔަތުކަން
          ދެވި، ޖާގައަށް ބުރަ ނުވާ ގޮތަށެވެ. މި ވަގުތު އިންޓަރނެޓު އަދި އެންޑުރޮއިޑު ވަޞީލަތްތަކުގައި ބޭނުން
          ކުރެވޭނެއެވެ.
        </p>
      </blockquote>




      <br>


      <h2>ލަނޑުދަނޑިތައް</h2>



      <table class="dvTable">
        <tbody>
          <tr>
            <th>ޙަދީޘް</th>
            <th>މަސައްކަތް</th>
            <th>ތާރީޚު</th>
          </tr>
          <tr>
            <td>40 ނަވަވީ</td>
            <td>ނިމިފައި</td>
            <td>2/3/2018</td>
          </tr>
        </tbody>
      </table>


    </div> <!-- END OF DHIV FONT -->


    <br>



  </div>
</body>

</html>
