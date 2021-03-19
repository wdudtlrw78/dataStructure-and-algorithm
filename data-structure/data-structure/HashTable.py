# # 리스트 변수를 활용 해쉬 테이블 구현
# hash_table = list([0 for i in range(8)]) # 해쉬 테이블

# def get_key(data): # key 생성 함수
#   return hash(data)

# def hash_function(key): # 해쉬 함수
#   return key % 8

# def save_data(data, value):
#   hash_address = hash_function(get_key(data))
#   hash_table[hash_address] = value

# def read_data(data):
#   hash_address = hash_function(get_key(data))
#   return hash_table[hash_address]

# save_data('mj', '01000001')
# save_data('rt', '01000002')
# save_data('tm', '01000003')

# print(read_data('mj'))  # 01000001
# print(hash_table)   # ['01000001', 0, 0, 0, 0, '01000003', 0, 0]


# # 충돌 (Collsion) solution algorithms
# # Chaining 기법
# 1. 해쉬 함수: key % 8
# 2. 해쉬 키 생성: hash(data)

# hash_table = list([0 for i in range(8)])

# def get_key(data):
#   return hash(data)

# def hash_function(key):
#   return key % 8

# def save_data(data, value):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(len(hash_table[hash_address])):
#       if hash_table[hash_address][index][0] == index_key:
#         hash_table[hash_address][index][1] = value
#         return
#     hash_table[hash_address].append([index_key, value]) # 연결리스트 형태로 리스트 추가
#   else:
#     hash_table[hash_address] = [[index_key, value]]

# def read_data(data):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(len(hash_table[hash_address])):
#       if hash_table[hash_address][index][0] == index_key:
#         return hash_table[hash_address][index][1]
#     return None
#   else:
#     return None
    
# print (hash('Dave') % 8) # 5
# print (hash('Dd') % 8) # 2
# print (hash('Data') % 8) # 2

# save_data('Dd', '1201023010') 
# save_data('Data', '3301023010')
# print(read_data('Dd')) # 1201023010

# print(hash_table) # [0, 0, 0, [[-6263711178016894397, '1201023010'], [-2171696802865206189, '3301023010']], 0, 0, 0, 0]


# Linear Probing 기법
# 1. 해쉬 함수: key % 8
# 2. 해쉬 키 생성: hash(data)

# hash_table = list([0 for i in range(8)])

# def get_key(data):
#   return hash(data)

# def hash_function(key):
#   return key % 8

# def save_data(data, value):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(hash_address, len(hash_table)): # ex: range(3, 8) 순회
#       if hash_table[index] == 0:
#         hash_table[index] = [index_key, value]
#         return
#       elif hash_table[0] == index_key:
#         hash_table[index][1] = value
#         return
#   else:
#     hash_table[hash_address] = [index_key, value]

# def read_data(data):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(hash_address, len(hash_table)):
#       if hash_table[index] == 0:
#         return None
#       elif hash_table[index][0] == index_key:
#         return hash_table[index][1]
#   else:
#     return None

# print (hash('ma') % 8) # 4
# print (hash('da') % 8) # 4
# print (hash('dc') % 8) # 1

# save_data('ma', '01200123123')
# save_data('da', '3333333333')
# save_data('dc', '4444444444')
# print(read_data('da')) # 3333333333

# print(hash_table) 
# [0, [7805401768041751913, '4444444444'], 0, 0, [-8385960279537885420, '01200123123'], [5656718304931272556, '3333333333'], 0, 0]


# #SHA - 256
# import hashlib

# data = 'test'.encode()
# hash_object = hashlib.sha256()
# hash_object.update(b'test')
# hex_dig = hash_object.hexdigest() # hexdigest 16진수 return
# print(hex_dig) # 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08

#Linear Probing 기법
#1. 해쉬 함수: key % 8
#2. 해쉬 키 생성: SHA - 256

# import hashlib

# hash_table = list([0 for i in range(8)])

# def get_key(data):
#   hash_object = hashlib.sha256()
#   hash_object.update(data.encode())
#   hex_dig = hash_object.hexdigest()
#   return int(hex_dig, 16)

# def hash_function(key):
#   return key % 8

# def save_data(data, value):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(hash_address, len(hash_table)): # ex: range(3, 8) 순회
#       if hash_table[index] == 0:
#         hash_table[index] = [index_key, value]
#         return
#       elif hash_table[0] == index_key:
#         hash_table[index][1] = value
#         return
#   else:
#     hash_table[hash_address] = [index_key, value]

# def read_data(data):
#   index_key = get_key(data)
#   hash_address = hash_function(index_key)
#   if hash_table[hash_address] != 0:
#     for index in range(hash_address, len(hash_table)):
#       if hash_table[index] == 0:
#         return None
#       elif hash_table[index][0] == index_key:
#         return hash_table[index][1]
#   else:
#     return None

# print (get_key('db') % 8) # 1
# print (get_key('da') % 8) # 2
# print (get_key('dh') % 8) # 2

# save_data('db', '4444444444')
# save_data('da', '01200123123')
# save_data('dh', '3333333333')

# print(read_data('da')) 
# print(read_data('dh'))

# print(hash_table)
# [0, [56023447740326973930934189836995694929976025384421001605890631798736143110161, '4444444444'], [77049896039817716104633086125973601665927154587286664305423403838091909979274, '01200123123'], [25902807790238191969936164090115518991880572428612380032453909518048593055890, '3333333333'], 0, 0, 0, 0]

import hashlib
hash_table = list([0 for i in range(16)])

# 키 생성
def get_key(data):
  hash_object = hashlib.sha256()
  hash_object.update(data.encode())
  hex_dig = hash_object.hexdigest()
  return int(hex_dig, 16)

# 해쉬 함수
def hash_function(key):
  return key % 16

def save_data(data, value):
  hash_address = hash_function(get_key(data))
  hash_table[hash_address] = value

def read_data(data):
  hash_address = hash_function(get_key(data))
  return hash_table[hash_address]

save_data('ffqq', '1')
save_data('mama', '2')
save_data('qw', '3')
save_data('re', '4')

print(read_data('ffqq'))
print(read_data('mama'))
print(read_data('qw'))
print(read_data('re'))

print(hash_table)