<h1 align="center">
	<a href="/README.md">
		<img align="center"
			width="300"
			alt="DeltaMath Hacking"
			src="https://raw.githubusercontent.com/DxltaMath/assets/master/profile/DxltaMath.jpg">
	</a>
</h1>


<p align="center">
	<strong>
		<a href="https://dxltamath.github.io/">Website</a>
		•
		<a href="https://dsc.gg/dxlta">Discord</a>
		•
		<a href="https://github.com/DxltaMath/DMIx/blob/master/.github/meta/QUICKSTART.md">Installation</a>
		•
		<a href="https://www.youtube.com/channel/UCpeKUQjK4mDtn_OUPfg5Uaw">YouTube</a>
	</strong>
</p>

## [How to hack DeltaMath](.github/meta/QUICKSTART.md)
Read our [Quickstart Guide](.github/meta/QUICKSTART.md).


<h4 align="center" id="Webstores">

<a href=""><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get DMIx for Mozilla Firefox"></a>
<a href="https://chrome.google.com/webstore/detail/delta-math-interception-e/lhhhbaakoallicbipmckclbigdlkdodh"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get DMIx for Google Chrome"></img></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/kihhkmfnemdfabkddfdelnggjanggdnl"><img src="https://user-images.githubusercontent.com/585534/107280673-a5ece780-6a26-11eb-9cc7-9fa9f9f81180.png" alt="Get DMIx for Microsoft Edge"></a>
<a href="/.github/meta/QUICKSTART.md"><img src="https://user-images.githubusercontent.com/69060894/184510500-c0c005f3-023a-4961-bfad-0d0faf055220.png" alt="Manual Install PHEx"></img></a>


</h4>
<br><br>



## Delta Math Interception (e)Xtension | DMIx


<br>

<details>
	<summary><strong>How does it work?</strong></summary>
	<li>Always blocking the original DeltaMath main.js, (block <code>*://*deltamath.com/app/main*js</code>)</li>
	<li>Whenever connecting to any DeltaMath URL, removes <code>Content-Security-Policy</code> headers to allow us to connect to our servers, even from DeltaMath itself.</li>
	<li>If you're going to DeltaMath, loads our script from <a href="https://github.com/DxltaMath/Nil">Nil</a>, and injects our modified <code>main.js</code> into DeltaMath.</li>
	<li><a href="https://github.com/DxltaMath/dGUI">dGUI</a> is loaded (this is included in the functionality of <a href="https://github.com/DxltaMath/Nil">Nil</a>).</li>
</details>


<br>

<details>
	<summary><strong>Building using Shell</strong></summary>
	<p>Works on Unix systems only. Sorry, windows developers.</p>
	<code>sh ./build.sh</code>
</details>

<br>

<details>
	<summary><strong>Building using Node.js</strong></summary>
	<code>npm install && npm run build</code>
</details>

<br>

<details>
	<summary><strong>Build output</strong></summary>
	<p>
		The output will be in <code>/build/</code>. The generated files are <code>extension.zip</code> (for chromium), <code>extension.xpi</code> (for firefox), and <code>extension.crx</code> (which actually isn't generated- it's downloaded from the chrome web store).
	</p>
</details>

<br>

<details>
	<summary><strong>Credit</strong></summary>
	<p>
		Code was based on <a href="https://github.com/ProdigyPNP/ProdigyMathGameHacking/tree/master/PHEx">PHEx</a>, but is changed to hack DeltaMath.
		<li>This extension is currently maintained by <a href="https://github.com/afkvido">gemsvidø</a>.</li>
	</p>
</details>
