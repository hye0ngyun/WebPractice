import random
# from xml.dom.minidom import Element
number_input = Element('number_input') # id값이 number_input인 텍스트에 엑세스
result = Element('result') # id값이 result인 텍스트에 엑세스
def play_game(*args):
  user_guess = number_input.value
  machine_guess = random.randint(1, 50)
  if int(user_guess) == machine_guess:
    # uesr win
    result.element.innerText = 'You win!'
  else:
    result.element.innerText = f'you lost! The machine chose {machine_guess}!'
  number_input.clear()