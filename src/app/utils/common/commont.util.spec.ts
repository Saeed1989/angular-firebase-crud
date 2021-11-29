import { async } from '@angular/core/testing';
import * as CommonUtil from './commont.util';

// test cases for isEmpty function
describe('CommonUtil', function () {
  describe('.isEmpty(x)', function () {
    it('should returns true when x is null', function () {
      expect(CommonUtil.isEmpty(null)).toBeTrue();
    });

    it('should returns true when x is undefined', function () {
      expect(CommonUtil.isEmpty(undefined)).toBeTrue();
    });

    it('should returns true when x is empty string', function () {
      expect(CommonUtil.isEmpty('')).toBeTrue();
    });

    it('should returns false when x is an object', function () {
      expect(CommonUtil.isEmpty({ dummy: 123 })).toBeFalse();
    });

    it('should returns false when x is number', function () {
      expect(CommonUtil.isEmpty(0)).toBeFalse();
    });

    it('should returns false when x is boolean value true', function () {
      expect(CommonUtil.isEmpty(true)).toBeFalse();
    });

    it('should returns false when x is boolean value false', function () {
      expect(CommonUtil.isEmpty(false)).toBeFalse();
    });

    it('should returns false when x is function', function () {
      expect(CommonUtil.isEmpty(() => {})).toBeFalse();
    });
  });
});
