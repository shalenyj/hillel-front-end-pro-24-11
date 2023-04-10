const { multiply, divide, obj } = require('../func');

describe('function:multiply', () => {
  it('should return 20 for arguments 4 and 5', () => {
    const result = multiply(4,5)
    expect(result).toBe(20);
  })
  it('should return 30 for arguments 3 and 10', () => {
    const result1 = multiply(3,10)
    expect(result1).toBe(30);
  })
})

describe('function:divide', () => {
  it('should return text Cannot divide by zero if second argument passed 0', () => {
    const result = divide(10, 0);
    expect(result).toBe('Cannot divide by zero')
  })
  it('should return Arguments should be numbers if some argument is not number', () => {
    const result = divide(5, []);
    expect(result).toBe('Arguments should be numbers')
  })
  it('should not return message Arguments should be numbers if both is number', () => {
    const result = divide(10,5);
    expect(result).not.toBe('Arguments should be numbers')
  })
  it('should return 5 for 10 and 2', () => {
    expect(divide(10,2)).toBe(5)
  })
})

describe('obj', () => {
  const item = { id: 10 };
  describe('obj:setItems', () => {
    it('should call filterByMinMax', () => {
      jest.spyOn(obj,'filterByMinMax')
      // obj.filterByMinMax = jest.fn();
      obj.setItems([item]);
      expect(obj.filterByMinMax).toHaveBeenCalled()
      console.log(obj.filterByMinMax.mock.calls)
      obj.filterByMinMax.mockRestore();
    })
  })
  describe('obj:filterByMinMax', () => {
    it('should return false if id greater than max', () => {
      const result = obj.filterByMinMax(item, 2,8)
      expect(result).toBeFalsy()
    })
    it('should return false if id less than min', () => {
      const result = obj.filterByMinMax(item, 11, 15)
      expect(result).toBeFalsy()
    })
    it('should return false if less than max, but less than min', () => {
      const result = obj.filterByMinMax(item, 11, 15)
      expect(result).toBeFalsy()
    })
    it('should return true if less than max, and greater than min', () => {
      const result = obj.filterByMinMax(item, 8, 12)
      expect(result).toBeTruthy()
    })
  })
  describe('getItems', () => {
    it('should call setItems method', async() => {
      obj.setItems = jest.fn();
      obj.fetchList = jest.fn().mockResolvedValue([{ id: '5' }]);
      await obj.getItems();
      expect(obj.setItems).toHaveBeenCalled()
    })
  })
})