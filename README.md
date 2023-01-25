<h1 align="center">
	<a href="/README.md">
		<img align="center"
			width="300"
			alt="DeltaMath Modding"
			src="https://raw.githubusercontent.com/DxltaMath/assets/master/profile/DxltaMath.jpg">
	</a>
</h1>


<p align="center">
	<strong>
		<a href="https://dxltamath.github.io/">Website</a>
		•
		<a href="https://dsc.gg/dxlta">Discord</a>
		•
		<a href="https://github.com/DxltaMath/DMPx/blob/master/.github/meta/QUICKSTART.md">Installation</a>
		•
		<a href="https://www.youtube.com/channel/UCpeKUQjK4mDtn_OUPfg5Uaw">YouTube</a>
	</strong>
</p>


## [How to mod DeltaMath](.github/meta/QUICKSTART.md)
Read our [Quickstart Guide](.github/meta/QUICKSTART.md).


<h4 align="center" id="Webstores">

<a href=""><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get DMPx for Mozilla Firefox"></a>
<a href="https://chrome.google.com/webstore/detail/delta-math-interception-e/lhhhbaakoallicbipmckclbigdlkdodh"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get DMPx for Google Chrome"></img></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/kihhkmfnemdfabkddfdelnggjanggdnl"><img src="https://user-images.githubusercontent.com/585534/107280673-a5ece780-6a26-11eb-9cc7-9fa9f9f81180.png" alt="Get DMPx for Microsoft Edge"></a>
<a href="/.github/meta/QUICKSTART.md"><img src="https://user-images.githubusercontent.com/69060894/184510500-c0c005f3-023a-4961-bfad-0d0faf055220.png" alt="Manual Install PHEx"></img></a>


</h4>
<br><br>




This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
