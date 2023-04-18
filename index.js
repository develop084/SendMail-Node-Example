import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "patidardev084@gmail.com",
    pass: "--Your Send in blue master key --",
  },
});

let mailOptions = {
  from: "patidardev084@gmail.com",
  to: "patidardev084@gmail.com",
  subject: "Hello from Nodemailer",
  html: `
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:720px) {

			.desktop_hide table.icons-inner,
			.row-13 .column-1 .block-1.image_block img,
			.row-14 .column-1 .block-1.image_block img,
			.row-15 .column-1 .block-1.image_block img,
			.row-16 .column-1 .block-1.image_block img,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-15 .column-1 .block-1.image_block td.pad,
			.row-3 .column-1 .block-4.paragraph_block td.pad {
				padding: 0 20px !important;
			}

			.row-12 .column-1 .block-3.heading_block h1,
			.row-18 .column-1 .block-2.heading_block h1,
			.row-3 .column-1 .block-3.heading_block h1,
			.row-5 .column-1 .block-1.heading_block h1,
			.row-8 .column-1 .block-2.heading_block h1 {
				font-size: 35px !important;
			}

			.row-3 .column-1 .block-2.image_block td.pad {
				padding: 20px 20px 0 !important;
			}

			.row-2 .column-2 .block-1.menu_block td.pad {
				padding: 30px 10px 10px !important;
			}

			.row-2 .column-2 .block-1.menu_block .menu-links a,
			.row-2 .column-2 .block-1.menu_block .menu-links span {
				font-size: 16px !important;
			}

			.row-7 .column-1 .block-1.button_block td.pad {
				padding: 25px 10px 10px !important;
			}

			.row-7 .column-1 .block-1.button_block a span,
			.row-7 .column-1 .block-1.button_block div,
			.row-7 .column-1 .block-1.button_block div span {
				line-height: 2 !important;
			}

			.row-12 .column-1 .block-2.image_block td.pad {
				padding: 60px 20px 40px !important;
			}

			.row-12 .column-1 .block-3.heading_block td.pad {
				padding: 20px 10px 0 !important;
			}

			.row-13 .column-1 .block-1.image_block td.pad {
				padding: 40px 0 0 20px !important;
			}

			.row-11 .column-1 .block-3.paragraph_block td.pad>div,
			.row-13 .column-1 .block-1.image_block .alignment,
			.row-14 .column-1 .block-1.image_block .alignment,
			.row-15 .column-1 .block-1.image_block .alignment,
			.row-16 .column-1 .block-1.image_block .alignment {
				text-align: left !important;
			}

			.row-11 .column-1 .block-3.paragraph_block td.pad,
			.row-16 .column-2 .block-2.paragraph_block td.pad {
				padding: 0 20px 10px !important;
			}

			.row-13 .column-2 .block-1.heading_block h1,
			.row-14 .column-2 .block-1.heading_block h1,
			.row-15 .column-2 .block-1.heading_block h1,
			.row-16 .column-2 .block-1.heading_block h1 {
				font-size: 25px !important;
			}

			.row-14 .column-1 .block-1.image_block td.pad {
				padding: 0 0 5px 20px !important;
			}

			.row-16 .column-2 .block-1.heading_block td.pad {
				padding: 5px 20px 0 !important;
			}

			.row-8 .column-1 .block-2.heading_block td.pad {
				padding: 10px !important;
			}

			.row-16 .column-1 .block-1.image_block td.pad {
				padding: 0 0 0 20px !important;
			}

			.row-19 .column-1 .block-5.social_block td.pad,
			.row-19 .column-2 .block-5.social_block td.pad {
				padding: 10px 10px 30px !important;
			}

			.row-11 .column-1 .block-2.heading_block h1 {
				text-align: center !important;
				font-size: 35px !important;
			}

			.row-11 .column-1 .block-2.heading_block td.pad {
				padding: 10px 10px 0 !important;
			}

			.row-13 .column-2 .block-1.heading_block td.pad,
			.row-14 .column-2 .block-1.heading_block td.pad {
				padding: 10px 20px 0 !important;
			}

			.row-13 .column-1 {
				padding: 5px 0 0 !important;
			}

			.row-13 .column-2,
			.row-14 .column-2,
			.row-15 .column-2,
			.row-16 .column-2 {
				padding: 0 !important;
			}

			.row-14 .column-1,
			.row-15 .column-1,
			.row-16 .column-1 {
				padding: 30px 0 0 !important;
			}
		}
	</style>
</head>
<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="41.666666666666664%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;width:100%;">
<div align="center" class="alignment" style="line-height:10px"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="Placeholder Logo" src="images/Group_32.png" style="display: block; height: auto; border: 0; width: 146px; max-width: 100%;" title="Placeholder Logo" width="146"/></a></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="58.333333333333336%">
<table border="0" cellpadding="10" cellspacing="0" class="menu_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="text-align:center;font-size:0px;">
<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#023c3a;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;" target="_self">HOME</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#023c3a;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;" target="_self">NEWS</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#023c3a;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;" target="_self">EVENTS</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;display:inline-block;color:#023c3a;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;" target="_self">LOG IN</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1 mobile_hide" style="height:50px;line-height:50px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Hero Image" class="big" src="images/Group_33.png" style="display: block; height: auto; border: 0; width: 595px; max-width: 100%;" title="Hero Image" width="595"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 55px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Company Monthly<br/>Newsletter</span></strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:60px;padding-right:60px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse sodales ornare ultrices. Sed interdum dui sed nibh pretium efficitur. Etiam aliquam interdum sollicitudin. Proin facilisis hendrerit efficitur. Nulla eget lectus sagittis, feugiat nibh et, imperdiet libero. Pellentesque vehicula laoreet quam, vel egestas sem elementum sit amet. Mauris sit amet urna quis felis imperdiet euismod non vel dui.</p>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-5" style="height:30px;line-height:30px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eccfd4; border-radius: 0; color: #000000; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; border-top: 20px solid #EEE4E3; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eccfd4; border-radius: 0; color: #000000; background-size: auto; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Happy Transgender <br/>Day of Visibility</span></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eccfd4; border-radius: 0; color: #000000; background-size: auto; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="41.666666666666664%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;width:100%;">
<div align="center" class="alignment" style="line-height:10px"><img src="images/Group_20_1.png" style="display: block; height: auto; border: 0; width: 238px; max-width: 100%;" width="238"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="58.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:30px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:27px;">
<p data-renderer-start-pos="801" style="margin: 0; margin-bottom: 16px;">Today (and every day), we honor and celebrate the joy of those living life as their true selves.</p>
<p data-renderer-start-pos="961" style="margin: 0; margin-bottom: 16px;">Transgender activist Rachel Crandall founded the day in 2009 as a reaction to the lack of LGBTQ+ recognition of transgender people. Still, the fight for visibility and acceptance began well before then and has continued until today.</p>
<p data-renderer-start-pos="1196" style="margin: 0; margin-bottom: 16px;">The recent attacks on the LGBTQIA+, specifically Transgender folx, make it difficult for these individuals to prosper and live freely. That's why here at <em data-renderer-mark="true">Company</em>, we strive to ensure that the safety, wellness, and prosperity of transgender folx is a priority.</p>
<p data-renderer-start-pos="1196" style="margin: 0;">We hope to continue building a brave and inclusive place for all at Company. Please let us know if there is anything we can do better at email@company.com</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eccfd4; border-radius: 0; color: #000000; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; border-top: 0 solid #EEE4E3; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
<div align="center" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:48px;width:163px;v-text-anchor:middle;" arcsize="63%" strokeweight="2.25pt" strokecolor="#023C3A" fillcolor="#023c3a"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#eee4e3; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#eee4e3;background-color:#023c3a;border-radius:30px;width:auto;border-top:3px solid #023C3A;font-weight:400;border-right:3px solid #023C3A;border-bottom:3px solid #023C3A;border-left:3px solid #023C3A;padding-top:5px;padding-bottom:5px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">READ MORE</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-2" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 55px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Upcoming Events</span></strong></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-left: 8px solid #EEE4E3; border-radius: 0; border-right: 8px solid #EEE4E3; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; border-bottom: 8px solid #EEE4E3; border-left: 8px solid #EEE4E3; border-right: 8px solid #EEE4E3; border-top: 8px solid #EEE4E3; padding-bottom: 5px; padding-top: 5px; vertical-align: top;" width="33.333333333333336%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; padding-left: 20px; text-align: left;">
<table align="left" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Calendar Icon" class="icon" height="32" src="images/050-calendar_1.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="30"/></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">DATE & TIME</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Event Name</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
<div align="left" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:36px;width:127px;v-text-anchor:middle;" arcsize="84%" strokeweight="0.75pt" strokecolor="#023C3A" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#023c3a; font-family:Tahoma, Verdana, sans-serif; font-size:12px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#023c3a;background-color:transparent;border-radius:30px;width:auto;border-top:1px solid #023C3A;font-weight:400;border-right:1px solid #023C3A;border-bottom:1px solid #023C3A;border-left:1px solid #023C3A;padding-top:5px;padding-bottom:5px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:12px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:12px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 24px;">JOIN NOW</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-7" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; border-bottom: 8px solid #EEE4E3; border-left: 8px solid #EEE4E3; border-right: 8px solid #EEE4E3; border-top: 8px solid #EEE4E3; padding-bottom: 5px; padding-top: 5px; vertical-align: top;" width="33.333333333333336%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; padding-left: 20px; text-align: left;">
<table align="left" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Calendar Icon" class="icon" height="32" src="images/050-calendar_1.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="30"/></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">DATE & TIME</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Event Name</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
<div align="left" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:36px;width:127px;v-text-anchor:middle;" arcsize="84%" strokeweight="0.75pt" strokecolor="#023C3A" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#023c3a; font-family:Tahoma, Verdana, sans-serif; font-size:12px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#023c3a;background-color:transparent;border-radius:30px;width:auto;border-top:1px solid #023C3A;font-weight:400;border-right:1px solid #023C3A;border-bottom:1px solid #023C3A;border-left:1px solid #023C3A;padding-top:5px;padding-bottom:5px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:12px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:12px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 24px;">JOIN NOW</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-7" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; border-bottom: 8px solid #EEE4E3; border-left: 8px solid #EEE4E3; border-right: 8px solid #EEE4E3; border-top: 8px solid #EEE4E3; padding-bottom: 5px; padding-top: 5px; vertical-align: top;" width="33.333333333333336%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; padding-left: 20px; text-align: left;">
<table align="left" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Calendar Icon" class="icon" height="32" src="images/050-calendar_1.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="30"/></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-top:5px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">DATE & TIME</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Event Name</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
<div align="left" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:36px;width:127px;v-text-anchor:middle;" arcsize="84%" strokeweight="0.75pt" strokecolor="#023C3A" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#023c3a; font-family:Tahoma, Verdana, sans-serif; font-size:12px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#023c3a;background-color:transparent;border-radius:30px;width:auto;border-top:1px solid #023C3A;font-weight:400;border-right:1px solid #023C3A;border-bottom:1px solid #023C3A;border-left:1px solid #023C3A;padding-top:5px;padding-bottom:5px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:12px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:12px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 24px;">JOIN NOW</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-7" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e99567; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; border-radius: 0; color: #000000; border-top: 30px solid #EEE4E3; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e99567; border-left: 16px solid #EEE4E3; border-right: 16px solid #EEE4E3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img class="big" src="images/Group_34.png" style="display: block; height: auto; border: 0; width: 367px; max-width: 100%;" width="367"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 40px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Big Things Are Happening</span></strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse sodales ornare ultrices. Sed interdum dui sed nibh pretium efficitur. Etiam aliquam interdum sollicitudin. Proin facilisis hendrerit efficitur. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:48px;width:163px;v-text-anchor:middle;" arcsize="63%" strokeweight="2.25pt" strokecolor="#023C3A" fillcolor="#023c3a"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#eee4e3; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#eee4e3;background-color:#023c3a;border-radius:30px;width:auto;border-top:3px solid #023C3A;font-weight:400;border-right:3px solid #023C3A;border-bottom:3px solid #023C3A;border-left:3px solid #023C3A;padding-top:5px;padding-bottom:5px;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">READ MORE</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; background-image: url('images/Group_46.png'); background-repeat: no-repeat; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1 mobile_hide" style="height:40px;line-height:40px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Workflow Image" class="big" src="images/Group_35.png" style="display: block; height: auto; border: 0; width: 490px; max-width: 100%;" title="Workflow Image" width="490"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 55px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Reminders:</span></strong></h1>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Growth Icon" src="images/Group_5.png" style="display: block; height: auto; border: 0; width: 93px; max-width: 100%;" title="Growth Icon" width="93"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Maecenas a massa</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse.</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-14" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Tone of Voice Icon" src="images/Group_6.png" style="display: block; height: auto; border: 0; width: 70px; max-width: 100%;" title="Tone of Voice Icon" width="70"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Maecenas a massa</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse.</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-15" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Testimonials Icon" src="images/Group_7.png" style="display: block; height: auto; border: 0; width: 93px; max-width: 100%;" title="Testimonials Icon" width="93"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Maecenas a massa</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse.</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-16" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Social Media Icon" src="images/Group_8.png" style="display: block; height: auto; border: 0; width: 82px; max-width: 100%;" title="Social Media Icon" width="82"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 25px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Maecenas a massa</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a massa a nibh pharetra vehicula. Suspendisse.</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-17" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-18" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 55px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Welcome to the team</span></h1>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-19" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Employee Portrait" src="images/Ellipse_1.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" title="Employee Portrait" width="152"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">POSITION</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Sarah Richards</span></strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:5px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="126px">
<tr>
<td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com/" target="_blank"><img alt="twitter" height="32" src="images/twitter2x-1.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="linkedin" height="32" src="images/linkedin2x-1.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="mailto:" target="_blank"><img alt="E-Mail" height="32" src="images/mail2x.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Employee Portrait" src="images/Ellipse_2.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" title="Employee Portrait" width="152"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">POSITION</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">John Doe</span></strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:5px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="126px">
<tr>
<td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com/" target="_blank"><img alt="twitter" height="32" src="images/twitter2x-1.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="linkedin" height="32" src="images/linkedin2x-1.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="mailto:" target="_blank"><img alt="E-Mail" height="32" src="images/mail2x.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Employee Portrait" src="images/Ellipse_3.png" style="display: block; height: auto; border: 0; width: 152px; max-width: 100%;" title="Employee Portrait" width="152"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #e99567; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 2px; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">POSITION</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #023c3a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 20px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Chris Thomas</span></strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:5px;">
<div style="color:#023c3a;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="126px">
<tr>
<td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com/" target="_blank"><img alt="twitter" height="32" src="images/twitter2x-1.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="linkedin" height="32" src="images/linkedin2x-1.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 5px 0 5px;"><a href="mailto:" target="_blank"><img alt="E-Mail" height="32" src="images/mail2x.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-20" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eee4e3; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-21" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #023c3a; border-radius: 0; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:center;">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="208px">
<tr>
<td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img alt="facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 10px 0 10px;"><a href="https://www.twitter.com/" target="_blank"><img alt="twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 10px 0 10px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="linkedin" height="32" src="images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com/" target="_blank"><img alt="instagram" height="32" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #eee4e3; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #eee4e3;" target="_blank">Company Name</a> | <a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #eee4e3;" target="_blank">Comapany Locations</a></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Maecenas a massa a nibh pharetra vehicula. Suspendisse.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
<p style="margin: 0;">Questions? Emails us at example@example.com <br/>Questions relating to privacy and the protection of your personal <br/>information should be sent to example@example.com</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
<p style="margin: 0;"><a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #eee4e3;" target="_blank">Unsubscribe</a></p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="color:#eee4e3;direction:ltr;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
<p style="margin: 0;">Company | 123 Street Name, City Name, Country Name <br/>Post Code AB12 34CD</p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-22" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;" width="700">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
<table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
<!--[if !vml]><!-->
<table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
<td style="font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>`,
  attachments: [
    {
      filename: "image1.png",
      path: "./images/bee.png",
      cid: "unique-id-1"
    },
    {
      filename: "image2.png",
      path: "./images/Group_35.png",
      cid: "unique-id-2"
    }
  ]
};


transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
