import { Selector } from 'testcafe';
const fileupload =Selector('#file-upload');
const uploadfilebutton =Selector('#file-submit');

fixture `upload files`
    .page `https://the-internet.herokuapp.com/upload`;

    test('upload image', async t => {
          await t
                 .setFilesToUpload(fileupload,'../upload_image/pngquant-logo.png')
                 .click(uploadfilebutton); 
                 
    });