# 01 . Lý do sử dụng redux
# 02 . Redux và React Redux cơ bản

- Chỉ xử lí trong tác vụ đồng bộ

- UI : react native 
- Action : An action is a plain JavaScript object { type : 'ACT_???' ,  payload : null }
- Reducer : Function
    - Input : ( state , action )
    - OutPut : state mới

UI ->  Dispatch Action -> reducer -> store -> UI

