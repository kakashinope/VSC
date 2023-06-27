# напиши тут свою програму
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.Textinput import TextLayout
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.screenmanager import ScreenManager, Screen
from instructions import txt_instruction

class InstrScr(Screen):
    def __init__(self,**kwargs):
        super().__init__(**kwargs)
        txt = Label(text = txt_instruction)

        txt2 = Label(text = 'Введіть імя:')
        txt3 = Label(text = 'Введіть вік:')

        self.in_name = TextLayout
        self.in_age = TextLayout

        linel1 = BoxLayout(size_hint = (0.8,None))
        linel2 = BoxLayout(size_hint = (0.8,None))

        linel1.add_widget(txt3)
        linel1.add_widget(self.in_age)

        linel1.add_widget(txt2)
        linel1.add_widget(self.in_name)

        layout = BoxLayout()
        layout.add_widget(txt)
        layout.add_widget(linel1)
        layout.add_widget(linel2)

        self.btn = Button(text = 'Next', size_hint=(0.3,0.2))
        self.btn.on_press = self.on_next

        self.add_widget(self.btn)
    
    def on_next(self):
        self.manager.current = 'pulsel'

class PuleScr(Screen):
    def __init__(self,**kwargs):
        super().__init__(**kwargs)
        self.btn = Button(text = 'Next', size_hint=(0.3,0.2))
        self.btn.on_press = self.on_next

        self.add_widget(self.btn)
    
    def on_next(self):
        self.manager.current = 'pulsel2'

class PuleScr2(Screen):
    def __init__(self,**kwargs):
        super().__init__(**kwargs)
        self.btn = Button(text = 'Next', size_hint=(0.3,0.2))
        self.btn.on_press = self.on_next

        self.add_widget(self.btn)
    
    def on_next(self):
        self.manager.current = 'sits'

class CheckSits(Screen):
    def __init__(self,**kwargs):
        super().__init__(**kwargs)
        self.btn = Button(text = 'Next', size_hint=(0.3,0.2))
        self.btn.on_press = self.on_next

        self.add_widget(self.btn)
    
    def on_next(self):
        self.manager.current = 'result'

class Result(Screen):
    def __init__(self,**kwargs):
        super().__init__(**kwargs)

class HeartChek(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(InstrScr(name = 'instr'))
        sm.add_widget(PuleScr(name = 'pulsel'))
        sm.add_widget(CheckSits(name = 'sits'))
        sm.add_widget(PuleScr2(name = 'pulsel2'))
        sm.add_widget(Result(name = 'result'))

        return sm

app = HeartChek()
app.run()