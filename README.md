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

# Delta Math Interception (e)Xtension | DMIx



<br>


## How does it work?
1. Always blocking the original DeltaMath main.js, (block `*://*deltamath.com/app/main*js`)
2. Whenever connecting to any DeltaMath URL, removes `Content-Security-Policy` headers to allow us to connect to our servers, even from DeltaMath itself.
3. If you're going to DeltaMath, loads our script from [Nil](https://github.com/DxltaMath/public-Nil), and injects our modified `main.js` into DeltaMath.
4. [dGUI](https://github.com/DxltaMath/dGUI) is loaded (this is included in the functionality of [Nil](https://github.com/DxltaMath/public-Nil)).


<br>

## Building using Shell
```shell
sh ./build.sh
```

## Building using Node.js
```
npm install
npm run build
```

## Build output
The output will be in `/build/`. The generated files are `extension.zip` (for chromium), `extension.xpi` (for firefox), and `extension.crx` (which actually isn't generated- it's downloaded from the chrome web store).

<br><br>




## Credit
Code was based on [PHEx](https://github.com/ProdigyPNP/ProdigyMathGameHacking/tree/master/PHEx), but is changed to hack DeltaMath.
- This extension is currently maintained by [gemsvidø](https://github.com/afkvido).
