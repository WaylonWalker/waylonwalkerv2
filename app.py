class Config:
    _state = dict()

    @property
    def state(self):
        return self._state

    @state.setter
    def state(self, new_state):
        self._state = {**self._state, **new_state}
        return self._state
