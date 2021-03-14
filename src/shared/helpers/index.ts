import { extname } from 'path';
import slugify from 'slugify';
import { SERVER_URL } from '../../constants';

class SlugifyOptions {
  lower: boolean;
  replacement: string;
}

export class Helper {
  static slugify(name: string, options?: SlugifyOptions) {
    if (options) {
      return slugify(name, options);
    }
    return slugify(name, { lower: true, replacement: '_' });
  }

  static fileUrl(filename: string) {
    return SERVER_URL + 'uploads/' + filename;
  }

  static editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(
      null,
      `${Helper.slugify(name)}_${Helper.slugify(randomName)}${fileExtName}`,
    );
  };

  static randomString(length: number) {
    return Math.random().toString(36).substring(length);
  }
}
