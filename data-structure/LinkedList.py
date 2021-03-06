# # Node 구현
# class Node:
#   def __init__(self, data, next=None):
#     self.data = data
#     self.next = next

# # 데이터 추가
# def add(data):
#   node = head
#   while node.next:
#     node = node.next
#   node.next = Node(data)

# # Node와 Node 연결 (포인터 활용)
# node1 = Node(1)
# head = node1
# for index in range(2, 10):
#   add(index)

# # 링크드 리스트 데이터 출력(검색)
# node = head
# while node.next:
#   print(node.data)
#   node = node.next
# print(node.data)


# # 데이터 사이에 데이터 추가
# node3 = Node(1.5)

# node = head
# search = True
# while search:
#   if node.data == 1:
#     search = False
#   else:
#     node = node.next

# node_next = node.next
# node.next = node3
# node3.next = node_next

# node = head
# while node.next:
#   print(node.data)
#   node = node.next
# print(node.data)

# 파이썬 객체지향으로 링크드 리스트 구현
class Node:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next

class NodeMgmt:
  def __init__(self, data):
    self.head = Node(data)

  def add(self, data):
    if self.head == "":
      self.head = Node(data)
    else:
      node = self.head
      while node.next:
        node = node.next
      node.next = Node(data)

  def desc(self):
    node = self.head
    while node:
      print(node.data)
      node = node.next

  def delete(self, data):
    if self.head == "":
      print("해당 값을 가진 노드가 없습니다")
      return   
    if self.head.data == data:
      temp = self.head
      self.head = self.head.next
      del temp
    else:
      node = self.head
      while node.next:
        if node.next.data == data:
          temp = node.next
          node.next = node.next.next
          del temp
          return
          pass
        else:
          node = node.next

  def search_node(self, data):
    node = self.head
    while node:
      if node.data == data:
        return node
      else:
        node = node.next
        
node_mgmt = NodeMgmt(0)
for data in range(1, 10):
    node_mgmt.add(data)

node = node_mgmt.search_node(4)
print (node.data)