Display an image preview when cursor is over html elements (links for example).
Previews are always displayed in the window and not truncated if the link is in the bottom of the window.

Options :
  - srcAttr : the attribute when the image source url is stored in the HTML object.

Example of use :
  - $('a.specialClass').jimgPreview({ srcAttr: 'imgSrc' }) : init links with 'specialClass' class to display image preview
	when the mouse cursor is over it. The src of the image is fetched from 'imgSrc' attribute.


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/8cb53998788c707fff97980979e0055b "githalytics.com")](http://githalytics.com/jbricha/jimgPreview)
