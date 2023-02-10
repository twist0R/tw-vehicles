;(function () {
    var _0x5dd8df = {
        492: function (_0x981c22, _0x5cdae8, _0xcde2b2) {
          function _0x484423(_0x345746) {
            var _0xe62a5b = _0x43afa1(_0x345746)
            return _0xcde2b2(_0xe62a5b)
          }
          function _0x43afa1(_0x1c1034) {
            if (!_0xcde2b2.o(_0x4e7482, _0x1c1034)) {
              var _0x472ce4 = new Error("Cannot find module '" + _0x1c1034 + "'")
              _0x472ce4.code = 'MODULE_NOT_FOUND'
              throw _0x472ce4
            }
            return _0x4e7482[_0x1c1034]
          }
          _0x484423.keys = function _0x561931() {
            return Object.keys(_0x4e7482)
          }
          _0x484423.resolve = _0x43afa1
          _0x981c22.exports = _0x484423
          _0x484423.id = 492
        },
        30: function (_0x10120b, _0x46c50f, _0xbfecfa) {
          'use strict'
          Object.defineProperty(_0x46c50f, '__esModule', { value: true })
          _0x46c50f.RestoreVehicleDamage =
            _0x46c50f.FetchVehicleDamage =
            _0x46c50f.GetVehicleAppearance =
            _0x46c50f.SetVehicleAppearance =
              void 0
          function _0x31a567(_0x28d381, _0x33f919) {
            if (_0x33f919 !== undefined) {
              if (
                _0x33f919?.colors?.primary !== undefined &&
                typeof _0x33f919?.colors?.primary === 'number'
              ) {
                const [_0xb0edef, _0x2e8926] = GetVehicleColours(_0x28d381)
                SetVehicleColours(
                  _0x28d381,
                  _0x33f919?.colors?.primary,
                  _0x2e8926
                )
              }
              if (
                _0x33f919?.colors?.secondary !== undefined &&
                typeof _0x33f919?.colors?.secondary === 'number'
              ) {
                const [_0x3485e1, _0x5b4bd4] = GetVehicleColours(_0x28d381)
                SetVehicleColours(
                  _0x28d381,
                  _0x3485e1,
                  _0x33f919?.colors?.secondary
                )
              }
              if (
                _0x33f919?.colors?.pearlescent !== undefined &&
                typeof _0x33f919?.colors?.pearlescent === 'number'
              ) {
                const [_0x446892, _0x3535c4] = GetVehicleExtraColours(_0x28d381)
                SetVehicleExtraColours(
                  _0x28d381,
                  _0x33f919?.colors?.pearlescent,
                  _0x3535c4
                )
              }
              if (
                _0x33f919?.colors?.wheels !== undefined &&
                typeof _0x33f919?.colors?.wheels === 'number'
              ) {
                const [_0x24c664, _0x58da9b] = GetVehicleExtraColours(_0x28d381)
                SetVehicleExtraColours(
                  _0x28d381,
                  _0x24c664,
                  _0x33f919?.colors?.wheels
                )
              }
              _0x33f919?.colors?.tyre !== undefined &&
                typeof _0x33f919?.colors?.tyre === 'object' &&
                SetVehicleTyreSmokeColor(
                  _0x28d381,
                  _0x33f919?.colors?.tyre.r,
                  _0x33f919?.colors?.tyre.g,
                  _0x33f919?.colors?.tyre.b
                )
              _0x33f919?.colors?.neon !== undefined &&
                typeof _0x33f919?.colors?.neon === 'object' &&
                SetVehicleNeonLightsColour(
                  _0x28d381,
                  _0x33f919?.colors?.neon.r,
                  _0x33f919?.colors?.neon.g,
                  _0x33f919?.colors?.neon.b
                )
              _0x33f919?.colors?.xenon !== undefined &&
                typeof _0x33f919?.colors?.xenon === 'number' &&
                SetVehicleXenonLightsColour(_0x28d381, _0x33f919?.colors?.xenon)
              _0x33f919?.colors?.dashboard !== undefined &&
                typeof _0x33f919?.colors?.dashboard === 'number' &&
                SetVehicleDashboardColour(_0x28d381, _0x33f919?.colors?.dashboard)
              _0x33f919?.colors?.interior !== undefined &&
                typeof _0x33f919?.colors?.interior === 'number' &&
                SetVehicleInteriorColour(_0x28d381, _0x33f919?.colors?.interior)
              _0x33f919?.tint !== undefined &&
                typeof _0x33f919?.tint === 'number' &&
                SetVehicleWindowTint(_0x28d381, _0x33f919?.tint)
              _0x33f919?.neon !== undefined &&
                typeof _0x33f919?.neon === 'object' &&
                (SetVehicleNeonLightEnabled(_0x28d381, 0, _0x33f919?.neon.left),
                SetVehicleNeonLightEnabled(_0x28d381, 1, _0x33f919?.neon.right),
                SetVehicleNeonLightEnabled(_0x28d381, 2, _0x33f919?.neon.front),
                SetVehicleNeonLightEnabled(_0x28d381, 3, _0x33f919?.neon.back))
              _0x33f919?.extras !== undefined &&
                Array.isArray(_0x33f919?.extras) &&
                Object.entries(_0x33f919?.extras).forEach(
                  ([_0x1d176f, _0x380b84]) => {
                    _0x380b84
                      ? SetVehicleExtra(_0x28d381, Number(_0x1d176f), false)
                      : SetVehicleExtra(_0x28d381, Number(_0x1d176f), true)
                  }
                )
              if (
                _0x33f919?.wheelType !== undefined &&
                typeof _0x33f919?.wheelType === 'number'
              ) {
                SetVehicleWheelType(_0x28d381, _0x33f919?.wheelType)
              }
              _0x33f919?.oldLivery !== undefined &&
                typeof _0x33f919?.oldLivery === 'number' &&
                SetVehicleLivery(_0x28d381, _0x33f919?.oldLivery)
              _0x33f919?.plateIndex !== undefined &&
                typeof _0x33f919?.plateIndex === 'number' &&
                SetVehicleNumberPlateTextIndex(_0x28d381, _0x33f919?.plateIndex)
            }
          }
          _0x46c50f.SetVehicleAppearance = _0x31a567
          _0xbfecfa.g.exports('SetVehicleAppearance', _0x31a567)
          function _0x21c256(_0x1c21a0) {
            if (_0x1c21a0 !== undefined) {
              return {
                colors: {
                  primary: GetVehicleColours(_0x1c21a0)[0],
                  secondary: GetVehicleColours(_0x1c21a0)[1],
                  pearlescent: GetVehicleExtraColours(_0x1c21a0)[0],
                  wheels: GetVehicleExtraColours(_0x1c21a0)[1],
                  tyre: {
                    r: GetVehicleTyreSmokeColor(_0x1c21a0)[0],
                    g: GetVehicleTyreSmokeColor(_0x1c21a0)[1],
                    b: GetVehicleTyreSmokeColor(_0x1c21a0)[2],
                  },
                  neon: {
                    r: GetVehicleNeonLightsColour(_0x1c21a0)[0],
                    g: GetVehicleNeonLightsColour(_0x1c21a0)[1],
                    b: GetVehicleNeonLightsColour(_0x1c21a0)[2],
                  },
                  xenon: GetVehicleXenonLightsColour(_0x1c21a0),
                  dashboard: GetVehicleDashboardColour(_0x1c21a0),
                  interior: GetVehicleInteriorColour(_0x1c21a0),
                },
                tint: GetVehicleWindowTint(_0x1c21a0),
                neon: {
                  left: IsVehicleNeonLightEnabled(_0x1c21a0, 0),
                  right: IsVehicleNeonLightEnabled(_0x1c21a0, 1),
                  front: IsVehicleNeonLightEnabled(_0x1c21a0, 2),
                  back: IsVehicleNeonLightEnabled(_0x1c21a0, 3),
                },
                extras: _0x5dbe81(_0x1c21a0),
                wheelType: GetVehicleWheelType(_0x1c21a0),
                oldLivery: GetVehicleLivery(_0x1c21a0),
                plateIndex: GetVehicleNumberPlateTextIndex(_0x1c21a0),
              }
            }
          }
          _0x46c50f.GetVehicleAppearance = _0x21c256
          _0xbfecfa.g.exports('GetVehicleAppearance', _0x21c256)
          function _0x5dbe81(_0x6aeb49) {
            const _0x22fd3b = []
            for (let _0x2b42d4 = 0; _0x2b42d4 < 12; _0x2b42d4 += 1) {
              IsVehicleExtraTurnedOn(_0x6aeb49, _0x2b42d4) &&
                _0x22fd3b.push(_0x2b42d4)
            }
            return _0x22fd3b
          }
          function _0x5acbbb(_0x45fc4a, _0x3d4bed) {
            switch (_0x3d4bed) {
              case 'body': {
                return +GetVehicleBodyHealth(_0x45fc4a).toFixed(2)
              }
              case 'engine': {
                return +GetVehicleEngineHealth(_0x45fc4a).toFixed(2)
              }
              case 'dirt': {
                return +GetVehicleDirtLevel(_0x45fc4a).toFixed(2)
              }
              case 'windows': {
                const _0x17215f = []
                for (let _0x2969a2 = 0; _0x2969a2 < 8; _0x2969a2 += 1) {
                  const _0x1a038e = {}
                  _0x1a038e.index = _0x2969a2
                  _0x1a038e.broken = !IsVehicleWindowIntact(_0x45fc4a, _0x2969a2)
                  _0x17215f.push(_0x1a038e)
                }
                return _0x17215f
              }
              case 'doors': {
                const _0x52af24 = []
                for (let _0x1e8be6 = 0; _0x1e8be6 < 7; _0x1e8be6 += 1) {
                  if (DoesVehicleHaveDoor(_0x45fc4a, _0x1e8be6)) {
                    const _0x1eb0e0 = { index: _0x1e8be6 }
                    _0x1eb0e0.broken = IsVehicleDoorDamaged(_0x45fc4a, _0x1e8be6)
                    _0x52af24.push(_0x1eb0e0)
                  }
                }
                return _0x52af24
              }
              case 'wheels': {
                const _0x511001 = GetVehicleNumberOfWheels(_0x45fc4a),
                  _0x1489cf = []
                for (let _0x15f6e0 = 0; _0x15f6e0 < _0x511001; _0x15f6e0 += 1) {
                  let _0x46aff0 = +GetVehicleWheelHealth(
                    _0x45fc4a,
                    _0x15f6e0
                  ).toFixed(2)
                  IsVehicleTyreBurst(_0x45fc4a, _0x15f6e0, false) &&
                    (_0x46aff0 = 0.1)
                  const _0x50fe15 = { index: _0x15f6e0 }
                  _0x50fe15.health = _0x46aff0
                  _0x1489cf.push(_0x50fe15)
                }
                return _0x1489cf
              }
            }
          }
          function _0x325831(_0x541bd7) {
            const _0x258ff1 = {}
            return (
              (_0x258ff1.body = _0x5acbbb(_0x541bd7, 'body')),
              (_0x258ff1.engine = _0x5acbbb(_0x541bd7, 'engine')),
              (_0x258ff1.dirt = _0x5acbbb(_0x541bd7, 'dirt')),
              (_0x258ff1.windows = _0x5acbbb(_0x541bd7, 'windows')),
              (_0x258ff1.doors = _0x5acbbb(_0x541bd7, 'doors')),
              (_0x258ff1.wheels = _0x5acbbb(_0x541bd7, 'wheels')),
              _0x258ff1
            )
          }
          _0x46c50f.FetchVehicleDamage = _0x325831
          _0xbfecfa.g.exports('FetchVehicleDamage', _0x325831)
          function _0x338694(_0x2e5f5e, _0x1c0220, _0x5a9bbd) {
            switch (_0x1c0220) {
              case 'body': {
                return SetVehicleBodyHealth(_0x2e5f5e, _0x5a9bbd)
              }
              case 'engine': {
                return SetVehicleEngineHealth(_0x2e5f5e, _0x5a9bbd)
              }
              case 'dirt': {
                return SetVehicleDirtLevel(_0x2e5f5e, _0x5a9bbd)
              }
              case 'windows': {
                return _0x5a9bbd?.forEach((_0x543428) => {
                  if (_0x543428.broken) {
                    SmashVehicleWindow(_0x2e5f5e, _0x543428.index)
                  }
                })
              }
              case 'doors': {
                return _0x5a9bbd?.forEach((_0x2fb95e) => {
                  if (_0x2fb95e.broken) {
                    SetVehicleDoorBroken(_0x2e5f5e, _0x2fb95e.index, true)
                  }
                })
              }
              case 'wheels': {
                return _0x5a9bbd?.forEach((_0x2765a6) => {
                  if (_0x2765a6.health < 50) {
                    SetVehicleTyreBurst(_0x2e5f5e, _0x2765a6.index, true, 1000)
                  } else {
                    if (_0x2765a6.health < 100) {
                      SetVehicleTyreBurst(_0x2e5f5e, _0x2765a6.index, false, 1)
                    } else {
                      SetVehicleWheelHealth(
                        _0x2e5f5e,
                        _0x2765a6.index,
                        _0x2765a6.health
                      )
                    }
                  }
                })
              }
            }
          }
          function _0x386cc6(_0xfb4ce9, _0x5cc6e6) {
            for (const [_0x5de9b6, _0x44493a] of Object.entries(_0x5cc6e6)) {
              _0x338694(_0xfb4ce9, _0x5de9b6, _0x44493a)
            }
          }
          _0x46c50f.RestoreVehicleDamage = _0x386cc6
          _0xbfecfa.g.exports('RestoreVehicleDamage', _0x386cc6)
        },
        957: function (_0x6a0f2d, _0x268213, _0x18cb77) {
          'use strict'
          var _0x2dd6b9 =
              (this && this['__createBinding']) ||
              (Object.create
                ? function (_0x109b34, _0x57bd57, _0x555034, _0x1628e4) {
                    if (_0x1628e4 === undefined) {
                      _0x1628e4 = _0x555034
                    }
                    Object.defineProperty(_0x109b34, _0x1628e4, {
                      enumerable: true,
                      get: function () {
                        return _0x57bd57[_0x555034]
                      },
                    })
                  }
                : function (_0x21a73c, _0x1a4adb, _0x2a0d4a, _0x12e6d5) {
                    if (_0x12e6d5 === undefined) {
                      _0x12e6d5 = _0x2a0d4a
                    }
                    _0x21a73c[_0x12e6d5] = _0x1a4adb[_0x2a0d4a]
                  }),
            _0x4f2364 =
              (this && this['__setModuleDefault']) ||
              (Object.create
                ? function (_0x4af091, _0x294651) {
                    Object.defineProperty(_0x4af091, 'default', {
                      enumerable: true,
                      value: _0x294651,
                    })
                  }
                : function (_0xfd68b6, _0x40b92b) {
                    _0xfd68b6.default = _0x40b92b
                  }),
            _0x142973 =
              (this && this['__importStar']) ||
              function (_0x5328b4) {
                if (_0x5328b4 && _0x5328b4['__esModule']) {
                  return _0x5328b4
                }
                var _0xdf97c0 = {}
                if (_0x5328b4 != null) {
                  for (var _0x58f79d in _0x5328b4)
                    if (
                      _0x58f79d !== 'default' &&
                      Object.prototype.hasOwnProperty.call(_0x5328b4, _0x58f79d)
                    ) {
                      _0x2dd6b9(_0xdf97c0, _0x5328b4, _0x58f79d)
                    }
                }
                _0x4f2364(_0xdf97c0, _0x5328b4)
                return _0xdf97c0
              }
          Object.defineProperty(_0x268213, '__esModule', { value: true })
          const _0x325b72 = _0x18cb77(615),
            _0x2c44de = _0x18cb77(871),
            _0x538c6d = _0x142973(_0x18cb77(450)),
            _0xce758c = _0x142973(_0x18cb77(908))
          onNet('vehicle:keys:give', async (_0x2ab836) => {
            const _0x4f6103 = PlayerPedId()
            let _0x2897a0 = 0
            _0x2ab836 === undefined ||
            _0x2ab836 === null ||
            _0x2ab836 === 0 ||
            !isNaN(_0x2ab836)
              ? GetVehiclePedIsIn(_0x4f6103, false) !== 0
                ? (_0x2897a0 = GetVehiclePedIsIn(_0x4f6103, false))
                : (_0x2897a0 = Number(
                    _0x18cb77.g.exports['tw-targetinteract'].GetCurrentEntity()
                  ))
              : (_0x2897a0 = Number(_0x2ab836))
            if (!(0, _0x2c44de.HasVehicleKey)(_0x2897a0)) {
              emit('DoLongHudText', 'No keys for target vehicle!', 2)
              return
            }
            const _0x570e88 = GetEntityCoords(_0x2897a0, false),
              _0x313c6e = GetEntityCoords(_0x4f6103, false),
              _0x3d835d = GetDistanceBetweenCoords(
                _0x570e88.x,
                _0x570e88.y,
                _0x570e88.z,
                _0x313c6e.x,
                _0x313c6e.y,
                _0x313c6e.z,
                true
              )
            if (Number(_0x3d835d) > 5) {
              emit('DoLongHudText', 'You are to far away from the vehicle!', 2)
              return
            }
            if (IsPedInAnyVehicle(_0x4f6103, false)) {
              const _0x2add4d = _0x2897a0
                  ? _0x2897a0
                  : GetVehiclePedIsIn(_0x4f6103, false),
                _0x421ab0 = GetVehicleModelNumberOfSeats(
                  GetEntityModel(_0x2add4d)
                )
              for (
                let _0x2050aa = -1;
                _0x2050aa < _0x421ab0 - 1;
                _0x2050aa += 1
              ) {
                const _0xb7a864 = GetPedInVehicleSeat(_0x2add4d, _0x2050aa)
                _0xb7a864 &&
                  _0xb7a864 !== _0x4f6103 &&
                  RPC.execute(
                    'vehicle:keys:send',
                    GetPlayerServerId(NetworkGetPlayerIndexFromPed(_0xb7a864)),
                    GetVehicleNumberPlateText(_0x2add4d)
                  )
              }
            } else {
              const [_0x1e43ef, _0x3c629c] =
                _0x18cb77.g.exports['tw-vehicles'].GetClosestPlayer()
              if (Number(_0x3c629c) !== -1 && Number(_0x3c629c) < 5) {
                let _0x4e2420 = await RPC.execute(
                  'vehicle:keys:send',
                  GetPlayerServerId(_0x1e43ef),
                  GetVehicleNumberPlateText(_0x2897a0)
                )
                if (!_0x4e2420) {
                  return emit('DoLongHudText', 'Error giving keys!', 2)
                }
                emit('DoLongHudText', 'You just gave keys to your vehicles!', 1)
              } else {
                emit('DoLongHudText', 'No player near you!', 2)
              }
            }
          })
          onNet('vehicle:keys:addNew', (_0x2d4fb0) => {
            if (_0x2d4fb0 === undefined) {
              return
            }
            const _0x1e1619 = GetVehicleNumberPlateText(Number(_0x2d4fb0))
            if ((0, _0x2c44de.HasVehicleKeyPlate)(_0x1e1619)) {
              return
            }
            ;(0, _0x2c44de.AddNewVehicleKey)(_0x1e1619)
            SetVehRadioStation(Number(_0x2d4fb0), 'OFF')
            SetVehicleDoorsLocked(Number(_0x2d4fb0), 1)
          })
          onNet('vehicle:keys:addNew:login', (_0x27f9a) => {
            if (_0x27f9a === undefined) {
              return
            }
            if ((0, _0x2c44de.HasVehicleKeyPlate)(_0x27f9a)) {
              return
            }
            ;(0, _0x2c44de.AddNewVehicleKey)(_0x27f9a)
          })
          onNet('vehicle:keys:received', (_0x782159) => {
            if (_0x782159 === undefined) {
              return
            }
            if (!(0, _0x2c44de.HasVehicleKeyPlate)(_0x782159)) {
              ;(0, _0x2c44de.AddNewVehicleKey)(_0x782159)
              emit('DoLongHudText', 'You just received keys to a vehicle!', 1)
              return
            }
            emit('DoLongHudText', 'You already have keys to that vehicle!', 2)
          })
          onNet('vehicle:toggleEngine', (_0x3479b5) => {
            const _0x2de5c3 = GetVehiclePedIsIn(PlayerPedId(), false)
            GetIsVehicleEngineRunning(_0x2de5c3)
              ? (_0x538c6d.TurnOffEngine(_0x2de5c3, true),
                SetVehicleUndriveable(_0x2de5c3, true))
              : (_0x538c6d.TurnOnEngine(_0x2de5c3, true),
                SetVehicleUndriveable(_0x2de5c3, false))
          })
          onNet('vehicle:startEngine', (_0x49ccaf) => {
            const _0x115f82 = _0x49ccaf
              ? Number(_0x49ccaf)
              : GetVehiclePedIsIn(PlayerPedId(), false)
            _0x538c6d.TurnOnEngine(_0x115f82)
          })
          onNet('vehicle:haltEngine', (_0xc0732c) => {
            const _0x267850 = _0xc0732c
              ? Number(_0xc0732c)
              : GetVehiclePedIsIn(PlayerPedId(), false)
            _0x538c6d.TurnOffEngine(_0x267850)
          })
          onNet('vehicle:toggleLocks', async (_0x12a3a2, _0x26fbd5) => {
            if (_0x26fbd5) {
              const _0x5b3766 = PlayerPedId(),
                _0x37b1f6 = IsPedInAnyVehicle(_0x5b3766, false),
                _0x1d6bed = GetVehicleDoorLockStatus(_0x12a3a2)
              emit('dooranim')
              if (Number(_0x1d6bed) === 0 || Number(_0x1d6bed === 1)) {
                SetVehicleDoorsLocked(_0x12a3a2, 2)
                SetVehicleDoorsLockedForPlayer(_0x12a3a2, PlayerId(), false)
                SetVehicleDoorsLockedForAllPlayers(_0x12a3a2, true)
                true &&
                  (emitNet('InteractSound_SV:PlayWithinDistance', 3, 'lock', 0.4),
                  emit('DoLongHudText', 'Vehicle Locked!', 1))
                !_0x37b1f6 &&
                  (SetVehicleLights(_0x12a3a2, 2),
                  SetVehicleBrakeLights(_0x12a3a2, true),
                  SetVehicleInteriorlight(_0x12a3a2, true),
                  SetVehicleIndicatorLights(_0x12a3a2, 0, true),
                  SetVehicleIndicatorLights(_0x12a3a2, 1, true),
                  await (0, _0x325b72.Delay)(450),
                  SetVehicleIndicatorLights(_0x12a3a2, 0, false),
                  SetVehicleIndicatorLights(_0x12a3a2, 1, false),
                  await (0, _0x325b72.Delay)(450),
                  SetVehicleInteriorlight(_0x12a3a2, true),
                  SetVehicleIndicatorLights(_0x12a3a2, 0, true),
                  SetVehicleIndicatorLights(_0x12a3a2, 1, true),
                  await (0, _0x325b72.Delay)(450),
                  SetVehicleLights(_0x12a3a2, 0),
                  SetVehicleBrakeLights(_0x12a3a2, false),
                  SetVehicleInteriorlight(_0x12a3a2, false),
                  SetVehicleIndicatorLights(_0x12a3a2, 0, false),
                  SetVehicleIndicatorLights(_0x12a3a2, 1, false))
              } else {
                if (_0x1d6bed === 2) {
                  SetVehicleDoorsLocked(_0x12a3a2, 1)
                  SetVehicleDoorsLockedForAllPlayers(_0x12a3a2, false)
                  true &&
                    (emitNet(
                      'InteractSound_SV:PlayWithinDistance',
                      5,
                      'unlock',
                      0.1
                    ),
                    emit('DoLongHudText', 'Vehicle Unlocked!', 1))
                  if (!_0x37b1f6) {
                    SetVehicleLights(_0x12a3a2, 2)
                    SetVehicleFullbeam(_0x12a3a2, true)
                    SetVehicleBrakeLights(_0x12a3a2, true)
                    SetVehicleInteriorlight(_0x12a3a2, true)
                    SetVehicleIndicatorLights(_0x12a3a2, 0, true)
                    SetVehicleIndicatorLights(_0x12a3a2, 1, true)
                    await (0, _0x325b72.Delay)(450)
                    SetVehicleIndicatorLights(_0x12a3a2, 0, false)
                    SetVehicleIndicatorLights(_0x12a3a2, 1, false)
                    await (0, _0x325b72.Delay)(450)
                    SetVehicleInteriorlight(_0x12a3a2, true)
                    SetVehicleIndicatorLights(_0x12a3a2, 0, true)
                    SetVehicleIndicatorLights(_0x12a3a2, 1, true)
                    await (0, _0x325b72.Delay)(450)
                    SetVehicleLights(_0x12a3a2, 0)
                    SetVehicleFullbeam(_0x12a3a2, false)
                    SetVehicleBrakeLights(_0x12a3a2, false)
                    SetVehicleInteriorlight(_0x12a3a2, false)
                    SetVehicleIndicatorLights(_0x12a3a2, 0, false)
                    SetVehicleIndicatorLights(_0x12a3a2, 1, false)
                  }
                }
              }
            }
          })
          onNet('vehicle:refuel:showMenu', (_0x52fbde, _0x447c86, _0x24473c) => {
            const _0x53d7a8 = GetVehicleFuelLevel(_0x447c86)
            let _0x29e1f5 = 100 - _0x53d7a8
            if (_0x29e1f5 < 0) {
              _0x29e1f5 = 0
            }
            if (_0x53d7a8 >= 100) {
              emit('DoLongHudText', 'Vehicle is already full!', 2)
              return
            }
            _0x29e1f5 = _0x29e1f5 + _0x29e1f5 * 0.1
            _0x29e1f5 = Math.ceil(_0x29e1f5)
            const _0x55a858 = [
              {
                title: 'Gas Station',
                description:
                  'The total cost is going to be $' +
                  _0x29e1f5 +
                  ', including 10% in taxes.',
                action: 'vehicle:refuel:handler',
                key: {
                  entity: _0x447c86,
                  cost: _0x29e1f5,
                },
              },
            ]
            _0x18cb77.g.exports['tw-interface'].showContextMenu(_0x55a858)
          })
          RegisterInterfaceCallback(
            'vehicle:refuel:handler',
            async (_0x4c803f, _0x385cf2) => {
              _0x385cf2({
                data: {},
                meta: {
                  ok: true,
                  message: '',
                },
              })
              const _0x3fc787 = _0x18cb77.g.exports.isPed.isPed('cid'),
                _0x2512ec = await RPC.execute(
                  'vehicle:refuel:hasEnough',
                  _0x3fc787,
                  _0x4c803f.key.cost
                )
              if (!_0x2512ec) {
                return emit(
                  'DoLongHudText',
                  "You don't have enough money on you.",
                  2
                )
              }
              const _0x11ed65 = GetIsVehicleEngineRunning(_0x4c803f.key.entity)
              if (_0x11ed65 === 1) {
                NetworkExplodeVehicle(_0x4c803f.key.entity, true, false, false)
                return
              }
              const _0x5afd9c = DecorGetInt(_0x4c803f.key.entity, 'CurrentFuel'),
                _0x4ec848 = (100 - _0x5afd9c) * 400
              ClearPedSecondaryTask(PlayerPedId())
              ;(0, _0x325b72.loadAnimDict)('weapon@w_sp_jerrycan')
              TaskTurnPedToFaceEntity(PlayerPedId(), _0x4c803f.key.entity, -1)
              TaskPlayAnim(
                PlayerPedId(),
                'weapon@w_sp_jerrycan',
                'fire',
                8,
                1,
                -1,
                1,
                0,
                false,
                false,
                false
              )
              const _0x548c2c = await _0x18cb77.g.exports['tw-taskbar'].taskBar(
                _0x4ec848,
                'Refueling'
              )
              if (_0x548c2c !== 100) {
                await RPC.execute(
                  'vehicle:refuel:finalizePayment',
                  _0x4c803f.key.cost
                )
                let _0x361c02 = 100 - _0x5afd9c
                _0x361c02 = Math.ceil(_0x361c02 * (_0x548c2c / 100) + _0x5afd9c)
                SetVehicleFuelLevel(_0x4c803f.key.entity, _0x361c02)
                DecorSetInt(_0x4c803f.key.entity, 'CurrentFuel', _0x361c02)
                ClearPedTasksImmediately(PlayerPedId())
                emit('DoLongHudText', 'Vehicle Refueled!', 1)
              }
              _0x548c2c === 100 &&
                (await RPC.execute(
                  'vehicle:refuel:finalizePayment',
                  _0x4c803f.key.cost
                ),
                SetVehicleFuelLevel(_0x4c803f.key.entity, 100),
                DecorSetInt(_0x4c803f.key.entity, 'CurrentFuel', 100),
                ClearPedTasksImmediately(PlayerPedId()),
                emit('DoLongHudText', 'Vehicle Refueled!', 1))
            }
          )
          onNet(
            'tw-vehicle:setVehicleMetaData',
            (_0x3762b0, _0x4bcd28, _0x42f2b0) => {
              const _0x46a5d3 = NetworkGetEntityFromNetworkId(_0x3762b0)
              _0x538c6d.SetVehicleMetadata(_0x46a5d3, _0x4bcd28, _0x42f2b0)
            }
          )
          on('vehicle:storeVehicle', async (_0x1dd10e, _0x1a107b) => {
            _0xce758c.StoreVehicleInGarage(_0x1a107b)
          })
          on('vehicle:garageVehicleList', async () => {
            _0xce758c.OpenGarageVehicleList()
          })
          onNet('arp:vehicles:sellPhone', (_0x3d64d1, _0x306afb, _0x7d7320) => {
            if (_0x3d64d1 && _0x2c44de.Keys.has(_0x3d64d1)) {
              const _0x5ae6a3 = _0x18cb77.g.exports.isPed.isPed('cid')
              RPC.execute(
                'arp:vehicles:sellPhone',
                _0x5ae6a3,
                _0x306afb,
                _0x3d64d1,
                _0x7d7320
              )
            } else {
              return emit('DoLongHudText', 'No keys for target vehicle!', 2)
            }
          })
          onNet(
            'arp:vehicles:sellNotify',
            (_0x3eec99, _0x4c33e6, _0x44b6eb, _0x328d9e, _0x1ae0c9) => {
              const _0x2d9e28 = _0x18cb77.g.exports.isPed.isPed('cid')
              if (_0x3eec99 === _0x2d9e28) {
                const _0x2a64ae = _0x328d9e.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }),
                  _0x4e6745 = _0x2a64ae + ' incl. tax',
                  _0x28182f = _0x18cb77.g.exports[
                    'tw-newphone'
                  ].DoPhoneConfirmation(30, 'Purchase Vehicle', _0x4e6745, 'car')
                _0x28182f &&
                  emitNet(
                    'arp:vehicles:sell:vehicle',
                    _0x3eec99,
                    _0x4c33e6,
                    _0x1ae0c9,
                    _0x328d9e,
                    _0x44b6eb
                  )
              }
            }
          )
          onNet('arp:vehicles:addKey', (_0x48e45b) => {
            if (!_0x2c44de.Keys.has(_0x48e45b)) {
              _0x2c44de.Keys.add(_0x48e45b)
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x325b72.Delay)(10)
              if (IsControlPressed(0, 182) && GetLastInputMethod(2)) {
                const _0x26e6d1 = PlayerPedId()
                let _0x8d27ae = GetVehiclePedIsUsing(_0x26e6d1)
                !DoesEntityExist(_0x8d27ae) &&
                  (_0x8d27ae = Number(
                    _0x18cb77.g.exports['tw-targetinteract'].GetCurrentEntity()
                  ))
                DoesEntityExist(_0x8d27ae) &&
                  ((0, _0x2c44de.HasVehicleKey)(_0x8d27ae)
                    ? emit('vehicle:toggleLocks', _0x8d27ae, true)
                    : emit('vehicle:toggleLocks', _0x8d27ae, false))
              }
            }
          })
        },
        50: function (_0x3f5193, _0x3d6071, _0x15c9e3) {
          'use strict'
          var _0x1bd3d5 =
              (this && this['__createBinding']) ||
              (Object.create
                ? function (_0x55e273, _0xf40521, _0x2a18b6, _0x4614a9) {
                    if (_0x4614a9 === undefined) {
                      _0x4614a9 = _0x2a18b6
                    }
                    Object.defineProperty(_0x55e273, _0x4614a9, {
                      enumerable: true,
                      get: function () {
                        return _0xf40521[_0x2a18b6]
                      },
                    })
                  }
                : function (_0xfaff1e, _0x183d59, _0x4a6629, _0x3d9450) {
                    if (_0x3d9450 === undefined) {
                      _0x3d9450 = _0x4a6629
                    }
                    _0xfaff1e[_0x3d9450] = _0x183d59[_0x4a6629]
                  }),
            _0x5c93f6 =
              (this && this['__setModuleDefault']) ||
              (Object.create
                ? function (_0x589852, _0xe17386) {
                    Object.defineProperty(_0x589852, 'default', {
                      enumerable: true,
                      value: _0xe17386,
                    })
                  }
                : function (_0x2743ef, _0x525f13) {
                    _0x2743ef.default = _0x525f13
                  }),
            _0x984f86 =
              (this && this['__importStar']) ||
              function (_0xe66d91) {
                if (_0xe66d91 && _0xe66d91['__esModule']) {
                  return _0xe66d91
                }
                var _0x379169 = {}
                if (_0xe66d91 != null) {
                  for (var _0x4d79f5 in _0xe66d91)
                    if (
                      _0x4d79f5 !== 'default' &&
                      Object.prototype.hasOwnProperty.call(_0xe66d91, _0x4d79f5)
                    ) {
                      _0x1bd3d5(_0x379169, _0xe66d91, _0x4d79f5)
                    }
                }
                _0x5c93f6(_0x379169, _0xe66d91)
                return _0x379169
              }
          Object.defineProperty(_0x3d6071, '__esModule', { value: true })
          const _0x37ab80 = _0x15c9e3(615),
            _0x3d3ded = _0x15c9e3(871),
            _0x4c570c = _0x984f86(_0x15c9e3(450))
          DecorRegister('isFlagged', 2)
          DecorRegister('fakePlate', 2)
          DecorRegister('harness', 3)
          DecorRegister('CurrentFuel', 3)
          DecorRegister('hasCarBomb', 2)
          DecorRegister('minSpeed', 3)
          DecorRegister('ticksBeforeExplode', 3)
          DecorRegister('ticksForRemoval', 3)
          setImmediate(async () => {
            while (true) {
              await (0, _0x37ab80.Delay)(1)
              const _0x119e33 = PlayerPedId()
              if (IsPedInAnyVehicle(_0x119e33, false)) {
                const _0x58d42d = GetVehiclePedIsUsing(_0x119e33)
                if (GetPedInVehicleSeat(_0x58d42d, -1) === _0x119e33) {
                  if (IsControlPressed(1, 96) && !IsThisModelAHeli(_0x58d42d)) {
                    if (GetIsVehicleEngineRunning(_0x58d42d)) {
                      _0x4c570c.TurnOffEngine(_0x58d42d, true)
                      SetVehicleUndriveable(_0x58d42d, true)
                    } else {
                      _0x4c570c.TurnOnEngine(_0x58d42d, true)
                      SetVehicleUndriveable(_0x58d42d, false)
                    }
                  }
                  if (!(0, _0x3d3ded.HasVehicleKey)(_0x58d42d)) {
                    _0x4c570c.TurnOffEngine(_0x58d42d, true)
                    SetVehicleUndriveable(_0x58d42d, true)
                  } else {
                    GetIsVehicleEngineRunning(_0x58d42d)
                      ? (_0x4c570c.TurnOnEngine(_0x58d42d, true),
                        SetVehicleUndriveable(_0x58d42d, false))
                      : (_0x4c570c.TurnOffEngine(_0x58d42d, true),
                        SetVehicleUndriveable(_0x58d42d, true))
                  }
                }
              }
            }
          })
        },
        871: function (_0x2d4416, _0x2e8d15, _0x3d2d8e) {
          'use strict'
          var _0xb7793c =
              (this && this['__createBinding']) ||
              (Object.create
                ? function (_0x3c5a61, _0x31e44e, _0x21e414, _0x228bf9) {
                    if (_0x228bf9 === undefined) {
                      _0x228bf9 = _0x21e414
                    }
                    Object.defineProperty(_0x3c5a61, _0x228bf9, {
                      enumerable: true,
                      get: function () {
                        return _0x31e44e[_0x21e414]
                      },
                    })
                  }
                : function (_0x4e84b6, _0xe2bff8, _0x898650, _0x33c100) {
                    if (_0x33c100 === undefined) {
                      _0x33c100 = _0x898650
                    }
                    _0x4e84b6[_0x33c100] = _0xe2bff8[_0x898650]
                  }),
            _0xce70b5 =
              (this && this['__setModuleDefault']) ||
              (Object.create
                ? function (_0x3ce9a6, _0x1cb511) {
                    Object.defineProperty(_0x3ce9a6, 'default', {
                      enumerable: true,
                      value: _0x1cb511,
                    })
                  }
                : function (_0x39f293, _0x437589) {
                    _0x39f293.default = _0x437589
                  }),
            _0x422719 =
              (this && this['__importStar']) ||
              function (_0x45739b) {
                if (_0x45739b && _0x45739b['__esModule']) {
                  return _0x45739b
                }
                var _0x4a2015 = {}
                if (_0x45739b != null) {
                  for (var _0x27a34e in _0x45739b)
                    if (
                      _0x27a34e !== 'default' &&
                      Object.prototype.hasOwnProperty.call(_0x45739b, _0x27a34e)
                    ) {
                      _0xb7793c(_0x4a2015, _0x45739b, _0x27a34e)
                    }
                }
                return _0xce70b5(_0x4a2015, _0x45739b), _0x4a2015
              }
          Object.defineProperty(_0x2e8d15, '__esModule', { value: true })
          _0x2e8d15.AddNewVehicleKey =
            _0x2e8d15.GiveVehicleKey =
            _0x2e8d15.HasVehicleKeyPlate =
            _0x2e8d15.HasVehicleKey =
            _0x2e8d15.Keys =
              void 0
          const _0x2a5e64 = _0x3d2d8e(615),
            _0x714310 = _0x422719(_0x3d2d8e(450))
          _0x2e8d15.Keys = new Set()
          let _0x544ffc = false
          setImmediate(async () => {
            const _0x43c111 = _0x3d2d8e.g.exports.isPed.isPed('cid'),
              _0x196ed9 = await RPC.execute(
                'arp:vehicles:getAllPlayerVehicles',
                _0x43c111
              )
            Object.entries(_0x196ed9).forEach(([_0x5414cd, _0x556fa4]) => {
              emit('vehicle:keys:addNew:login', _0x556fa4.license_plate)
            })
          })
          function _0x392033(_0x1233db) {
            const _0x582662 = GetVehicleNumberPlateText(Number(_0x1233db))
            if (_0x2e8d15.Keys.has(_0x582662)) {
              return true
            }
            return false
          }
          _0x2e8d15.HasVehicleKey = _0x392033
          _0x3d2d8e.g.exports('HasVehicleKey', _0x392033)
          function _0x38053c(_0x34d632) {
            if (_0x2e8d15.Keys.has(_0x34d632)) {
              return true
            }
            return false
          }
          _0x2e8d15.HasVehicleKeyPlate = _0x38053c
          _0x3d2d8e.g.exports('HasVehicleKeyPlate', _0x38053c)
          function _0x432598(_0x1cf6da, _0x139c17) {
            if (_0x1cf6da === undefined) {
              return
            }
            const _0x202910 = GetVehicleNumberPlateText(Number(_0x1cf6da))
            RPC.execute('vehicle:keys:send', Number(_0x139c17), _0x202910)
          }
          _0x2e8d15.GiveVehicleKey = _0x432598
          function _0xa98dd(_0x5ecb75) {
            _0x2e8d15.Keys.add(_0x5ecb75)
          }
          _0x2e8d15.AddNewVehicleKey = _0xa98dd
          setImmediate(async () => {
            while (true) {
              await (0, _0x2a5e64.Delay)(1)
              _0x544ffc && DisableControlAction(0, 23, true)
              let _0x51df81 = false
              if (
                GetVehiclePedIsTryingToEnter(PlayerPedId()) !== undefined &&
                GetVehiclePedIsTryingToEnter(PlayerPedId()) !== 0
              ) {
                _0x51df81 = true
                const _0x40c2b2 = GetVehiclePedIsTryingToEnter(PlayerPedId())
                if (GetEntityModel(_0x40c2b2) === GetHashKey('POLFEGWAY')) {
                  const _0x409858 = GetEntityCoords(_0x40c2b2, false),
                    _0x12a211 = PlayerPedId(),
                    _0x16f0bb = GetEntityCoords(_0x12a211, false),
                    _0x198de6 = GetDistanceBetweenCoords(
                      _0x409858[0],
                      _0x409858[1],
                      _0x409858[2],
                      _0x16f0bb[0],
                      _0x16f0bb[1],
                      _0x16f0bb[2],
                      true
                    )
                  _0x198de6 < 2.5 &&
                    (ClearPedTasksImmediately(_0x12a211),
                    SetPedIntoVehicle(_0x12a211, _0x40c2b2, 0),
                    SetPedIntoVehicle(_0x12a211, _0x40c2b2, -1))
                }
                if (!_0x392033(_0x40c2b2)) {
                  const _0x48ca97 = GetPedInVehicleSeat(_0x40c2b2, -1)
                  if (
                    _0x48ca97 !== 0 &&
                    (!IsPedAPlayer(_0x48ca97) || IsEntityDead(_0x48ca97))
                  ) {
                    if (IsEntityDead(_0x48ca97)) {
                      emit('tw-dispatch:carjacking')
                      const _0x1d3972 = await _0x3d2d8e.g.exports[
                        'tw-taskbar'
                      ].taskBar(3000, 'Taking Keys', false)
                      if (_0x1d3972 !== 100) {
                        ClearPedTasksImmediately(PlayerPedId())
                      }
                      _0x1d3972 === 100 &&
                        (emit('vehicle:keys:addNew', _0x40c2b2),
                        await _0x3d2d8e.g.exports['tw-flags'].SetVehicleFlag(
                          _0x40c2b2,
                          'isStolenVehicle',
                          true
                        ))
                    } else {
                      const _0x11edb8 = NetworkGetEntityOwner(_0x48ca97)
                      if (_0x11edb8 === PlayerId()) {
                        DecorSetBool(_0x48ca97, 'ScriptedPed', true)
                      } else {
                        emitNet(
                          'np:peds:decor',
                          GetPlayerServerId(_0x11edb8),
                          PedToNet(_0x48ca97)
                        )
                      }
                      if (GetEntityModel(_0x40c2b2) !== GetHashKey('taxi')) {
                        if (Math.floor(Math.random() * 100) + 1 > 95) {
                          emit('tw-dispatch:carjacking')
                          const _0x558658 = await _0x3d2d8e.g.exports[
                            'tw-taskbar'
                          ].taskBar(3000, 'Taking Keys', false)
                          _0x558658 !== 100 &&
                            ClearPedTasksImmediately(PlayerPedId())
                          _0x558658 === 100 &&
                            (emit('vehicle:keys:addNew', _0x40c2b2),
                            await _0x3d2d8e.g.exports['tw-flags'].SetVehicleFlag(
                              _0x40c2b2,
                              'isStolenVehicle',
                              true
                            ))
                        } else {
                          SetVehicleDoorsLocked(_0x40c2b2, 2)
                          SetVehicleDoorsLockedForAllPlayers(_0x40c2b2, true)
                          await (0, _0x2a5e64.Delay)(1000)
                          emit('tw-dispatch:carjacking')
                          TaskReactAndFleePed(_0x48ca97, PlayerPedId())
                          SetPedKeepTask(_0x48ca97, true)
                          ClearPedTasksImmediately(PlayerPedId())
                          _0x544ffc = true
                          await (0, _0x2a5e64.Delay)(2000)
                          _0x544ffc = false
                        }
                      } else {
                        SetPedIntoVehicle(PlayerPedId(), _0x40c2b2, 2),
                          SetPedIntoVehicle(PlayerPedId(), _0x40c2b2, 1)
                      }
                    }
                  }
                }
              }
              if (IsPedJacking(PlayerPedId())) {
                _0x51df81 = true
                const _0x44705d = GetVehiclePedIsUsing(PlayerPedId())
                let _0x2ea68e = true
                while (_0x2ea68e) {
                  const _0x25635b = IsPedInAnyVehicle(PlayerPedId(), false)
                  !_0x25635b && (_0x2ea68e = false)
                  if (IsVehicleEngineOn(_0x44705d) && !_0x392033(_0x44705d)) {
                    _0x714310.TurnOffEngine(_0x44705d, true)
                    SetVehicleUndriveable(_0x44705d, true)
                    _0x2ea68e = false
                  }
                  await (0, _0x2a5e64.Delay)(1)
                }
              }
              !_0x51df81 && (await (0, _0x2a5e64.Delay)(100))
            }
          })
        },
        120: function (_0x4694d8, _0x162dea, _0x1d11a1) {
          'use strict'
          Object.defineProperty(_0x162dea, '__esModule', { value: true })
          _0x162dea.GetVehicleMods = _0x162dea.SetVehicleMods = void 0
          function _0x44eca9(_0x591529, _0x335a82) {
            SetVehicleModKit(_0x591529, 0)
            if (_0x335a82 !== undefined) {
              _0x335a82.Spoilers !== undefined &&
                typeof _0x335a82.Spoilers === 'number' &&
                SetVehicleMod(_0x591529, 0, _0x335a82.Spoilers, false)
              _0x335a82.FrontBumper !== undefined &&
                typeof _0x335a82.FrontBumper === 'number' &&
                SetVehicleMod(_0x591529, 1, _0x335a82.FrontBumper, false)
              _0x335a82.RearBumper !== undefined &&
                typeof _0x335a82.RearBumper === 'number' &&
                SetVehicleMod(_0x591529, 2, _0x335a82.RearBumper, false)
              _0x335a82.SideSkirt !== undefined &&
                typeof _0x335a82.SideSkirt === 'number' &&
                SetVehicleMod(_0x591529, 3, _0x335a82.SideSkirt, false)
              _0x335a82.Exhaust !== undefined &&
                typeof _0x335a82.Exhaust === 'number' &&
                SetVehicleMod(_0x591529, 4, _0x335a82.Exhaust, false)
              _0x335a82.Frame !== undefined &&
                typeof _0x335a82.Frame === 'number' &&
                SetVehicleMod(_0x591529, 5, _0x335a82.Frame, false)
              _0x335a82.Grille !== undefined &&
                typeof _0x335a82.Grille === 'number' &&
                SetVehicleMod(_0x591529, 6, _0x335a82.Grille, false)
              _0x335a82.Hood !== undefined &&
                typeof _0x335a82.Hood === 'number' &&
                SetVehicleMod(_0x591529, 7, _0x335a82.Hood, false)
              _0x335a82.Fender !== undefined &&
                typeof _0x335a82.Fender === 'number' &&
                SetVehicleMod(_0x591529, 8, _0x335a82.Fender, false)
              _0x335a82.RightFender !== undefined &&
                typeof _0x335a82.RightFender === 'number' &&
                SetVehicleMod(_0x591529, 9, _0x335a82.RightFender, false)
              if (
                _0x335a82.Roof !== undefined &&
                typeof _0x335a82.Roof === 'number'
              ) {
                SetVehicleMod(_0x591529, 10, _0x335a82.Roof, false)
              }
              _0x335a82.Engine !== undefined &&
                typeof _0x335a82.Engine === 'number' &&
                SetVehicleMod(_0x591529, 11, _0x335a82.Engine, false)
              _0x335a82.Brakes !== undefined &&
                typeof _0x335a82.Brakes === 'number' &&
                SetVehicleMod(_0x591529, 12, _0x335a82.Brakes, false)
              _0x335a82.Transmission !== undefined &&
                typeof _0x335a82.Transmission === 'number' &&
                SetVehicleMod(_0x591529, 13, _0x335a82.Transmission, false)
              _0x335a82.Horns !== undefined &&
                typeof _0x335a82.Horns === 'number' &&
                SetVehicleMod(_0x591529, 14, _0x335a82.Horns, false)
              _0x335a82.Suspension !== undefined &&
                typeof _0x335a82.Suspension === 'number' &&
                SetVehicleMod(_0x591529, 15, _0x335a82.Suspension, false)
              _0x335a82.Armor !== undefined &&
                typeof _0x335a82.Armor === 'number' &&
                SetVehicleMod(_0x591529, 16, _0x335a82.Armor, false)
              _0x335a82.UNK17 !== undefined &&
                typeof _0x335a82.UNK17 === 'number' &&
                SetVehicleMod(_0x591529, 17, _0x335a82.UNK17, false)
              _0x335a82.Turbo !== undefined &&
                typeof _0x335a82.Turbo === 'number' &&
                ToggleVehicleMod(_0x591529, 18, _0x335a82.Turbo)
              _0x335a82.UNK19 !== undefined &&
                typeof _0x335a82.UNK19 === 'number' &&
                SetVehicleMod(_0x591529, 19, _0x335a82.UNK19, false)
              _0x335a82.TireSmoke !== undefined &&
                typeof _0x335a82.TireSmoke === 'number' &&
                ToggleVehicleMod(_0x591529, 20, _0x335a82.TireSmoke)
              _0x335a82.UNK21 !== undefined &&
                typeof _0x335a82.UNK21 === 'number' &&
                SetVehicleMod(_0x591529, 21, _0x335a82.UNK21, false)
              _0x335a82.XenonHeadlights !== undefined &&
                typeof _0x335a82.XenonHeadlights === 'number' &&
                ToggleVehicleMod(_0x591529, 22, _0x335a82.XenonHeadlights)
              _0x335a82.FrontWheels !== undefined &&
                typeof _0x335a82.FrontWheels === 'number' &&
                SetVehicleMod(_0x591529, 23, _0x335a82.FrontWheels, false)
              _0x335a82.BackWheels !== undefined &&
                typeof _0x335a82.BackWheels === 'number' &&
                SetVehicleMod(_0x591529, 24, _0x335a82.BackWheels, false)
              if (
                _0x335a82.PlateHolder !== undefined &&
                typeof _0x335a82.PlateHolder === 'number'
              ) {
                SetVehicleMod(_0x591529, 25, _0x335a82.PlateHolder, false)
              }
              _0x335a82.VanityPlates !== undefined &&
                typeof _0x335a82.VanityPlates === 'number' &&
                SetVehicleMod(_0x591529, 26, _0x335a82.VanityPlates, false)
              _0x335a82.InteriorTrim !== undefined &&
                typeof _0x335a82.InteriorTrim === 'number' &&
                SetVehicleMod(_0x591529, 27, _0x335a82.InteriorTrim, false)
              _0x335a82.Ornaments !== undefined &&
                typeof _0x335a82.Ornaments === 'number' &&
                SetVehicleMod(_0x591529, 28, _0x335a82.Ornaments, false)
              _0x335a82.Dashboard !== undefined &&
                typeof _0x335a82.Dashboard === 'number' &&
                SetVehicleMod(_0x591529, 29, _0x335a82.Dashboard, false)
              _0x335a82.Dials !== undefined &&
                typeof _0x335a82.Dials === 'number' &&
                SetVehicleMod(_0x591529, 30, _0x335a82.Dials, false)
              _0x335a82.DoorSpeakers !== undefined &&
                typeof _0x335a82.DoorSpeakers === 'number' &&
                SetVehicleMod(_0x591529, 31, _0x335a82.DoorSpeakers, false)
              if (
                _0x335a82.Seats !== undefined &&
                typeof _0x335a82.Seats === 'number'
              ) {
                SetVehicleMod(_0x591529, 32, _0x335a82.Seats, false)
              }
              _0x335a82.SteeringWheel !== undefined &&
                typeof _0x335a82.SteeringWheel === 'number' &&
                SetVehicleMod(_0x591529, 33, _0x335a82.SteeringWheel, false)
              _0x335a82.ShiftLeavers !== undefined &&
                typeof _0x335a82.ShiftLeavers === 'number' &&
                SetVehicleMod(_0x591529, 34, _0x335a82.ShiftLeavers, false)
              _0x335a82.Plaques !== undefined &&
                typeof _0x335a82.Plaques === 'number' &&
                SetVehicleMod(_0x591529, 35, _0x335a82.Plaques, false)
              _0x335a82.Speakers !== undefined &&
                typeof _0x335a82.Speakers === 'number' &&
                SetVehicleMod(_0x591529, 36, _0x335a82.Speakers, false)
              _0x335a82.Trunk !== undefined &&
                typeof _0x335a82.Trunk === 'number' &&
                SetVehicleMod(_0x591529, 37, _0x335a82.Trunk, false)
              _0x335a82.Hydraulics !== undefined &&
                typeof _0x335a82.Hydraulics === 'number' &&
                SetVehicleMod(_0x591529, 38, _0x335a82.Hydraulics, false)
              _0x335a82.EngineBlock !== undefined &&
                typeof _0x335a82.EngineBlock === 'number' &&
                SetVehicleMod(_0x591529, 39, _0x335a82.EngineBlock, false)
              _0x335a82.AirFilter !== undefined &&
                typeof _0x335a82.AirFilter === 'number' &&
                SetVehicleMod(_0x591529, 40, _0x335a82.AirFilter, false)
              if (
                _0x335a82.Struts !== undefined &&
                typeof _0x335a82.Struts === 'number'
              ) {
                SetVehicleMod(_0x591529, 41, _0x335a82.Struts, false)
              }
              _0x335a82.ArchCover !== undefined &&
                typeof _0x335a82.ArchCover === 'number' &&
                SetVehicleMod(_0x591529, 42, _0x335a82.ArchCover, false)
              _0x335a82.Aerials !== undefined &&
                typeof _0x335a82.Aerials === 'number' &&
                SetVehicleMod(_0x591529, 43, _0x335a82.Aerials, false)
              if (
                _0x335a82.Trim !== undefined &&
                typeof _0x335a82.Trim === 'number'
              ) {
                SetVehicleMod(_0x591529, 44, _0x335a82.Trim, false)
              }
              if (
                _0x335a82.Tank !== undefined &&
                typeof _0x335a82.Tank === 'number'
              ) {
                SetVehicleMod(_0x591529, 45, _0x335a82.Tank, false)
              }
              if (
                _0x335a82.Windows !== undefined &&
                typeof _0x335a82.Windows === 'number'
              ) {
                SetVehicleMod(_0x591529, 46, _0x335a82.Windows, false)
              }
              _0x335a82.UNK47 !== undefined &&
                typeof _0x335a82.UNK47 === 'number' &&
                SetVehicleMod(_0x591529, 47, _0x335a82.UNK47, false)
              if (
                _0x335a82.Livery !== undefined &&
                typeof _0x335a82.Livery === 'number'
              ) {
                SetVehicleMod(_0x591529, 48, _0x335a82.Livery, false)
              }
            }
          }
          _0x162dea.SetVehicleMods = _0x44eca9
          _0x1d11a1.g.exports('SetVehicleMods', _0x44eca9)
          function _0x2266ce(_0x22c8f9) {
            if (_0x22c8f9 !== undefined) {
              return {
                Spoilers: GetVehicleMod(_0x22c8f9, 0),
                FrontBumper: GetVehicleMod(_0x22c8f9, 1),
                RearBumper: GetVehicleMod(_0x22c8f9, 2),
                SideSkirt: GetVehicleMod(_0x22c8f9, 3),
                Exhaust: GetVehicleMod(_0x22c8f9, 4),
                Frame: GetVehicleMod(_0x22c8f9, 5),
                Grille: GetVehicleMod(_0x22c8f9, 6),
                Hood: GetVehicleMod(_0x22c8f9, 7),
                Fender: GetVehicleMod(_0x22c8f9, 8),
                RightFender: GetVehicleMod(_0x22c8f9, 9),
                Roof: GetVehicleMod(_0x22c8f9, 10),
                Engine: GetVehicleMod(_0x22c8f9, 11),
                Brakes: GetVehicleMod(_0x22c8f9, 12),
                Transmission: GetVehicleMod(_0x22c8f9, 13),
                Horns: GetVehicleMod(_0x22c8f9, 14),
                Suspension: GetVehicleMod(_0x22c8f9, 15),
                Armor: GetVehicleMod(_0x22c8f9, 16),
                UNK17: GetVehicleMod(_0x22c8f9, 17),
                Turbo: IsToggleModOn(_0x22c8f9, 18),
                UNK19: GetVehicleMod(_0x22c8f9, 19),
                TireSmoke: IsToggleModOn(_0x22c8f9, 20),
                UNK21: GetVehicleMod(_0x22c8f9, 21),
                XenonHeadlights: IsToggleModOn(_0x22c8f9, 22),
                FrontWheels: GetVehicleMod(_0x22c8f9, 23),
                BackWheels: GetVehicleMod(_0x22c8f9, 24),
                PlateHolder: GetVehicleMod(_0x22c8f9, 25),
                VanityPlates: GetVehicleMod(_0x22c8f9, 26),
                InteriorTrim: GetVehicleMod(_0x22c8f9, 27),
                Ornaments: GetVehicleMod(_0x22c8f9, 28),
                Dashboard: GetVehicleMod(_0x22c8f9, 29),
                Dials: GetVehicleMod(_0x22c8f9, 30),
                DoorSpeakers: GetVehicleMod(_0x22c8f9, 31),
                Seats: GetVehicleMod(_0x22c8f9, 32),
                SteeringWheel: GetVehicleMod(_0x22c8f9, 33),
                ShiftLeavers: GetVehicleMod(_0x22c8f9, 34),
                Plaques: GetVehicleMod(_0x22c8f9, 35),
                Speakers: GetVehicleMod(_0x22c8f9, 36),
                Trunk: GetVehicleMod(_0x22c8f9, 37),
                Hydraulics: GetVehicleMod(_0x22c8f9, 38),
                EngineBlock: GetVehicleMod(_0x22c8f9, 39),
                AirFilter: GetVehicleMod(_0x22c8f9, 40),
                Struts: GetVehicleMod(_0x22c8f9, 41),
                ArchCover: GetVehicleMod(_0x22c8f9, 42),
                Aerials: GetVehicleMod(_0x22c8f9, 43),
                Trim: GetVehicleMod(_0x22c8f9, 44),
                Tank: GetVehicleMod(_0x22c8f9, 45),
                Windows: GetVehicleMod(_0x22c8f9, 46),
                UNK47: GetVehicleMod(_0x22c8f9, 47),
                Livery: GetVehicleMod(_0x22c8f9, 48),
              }
            }
          }
          _0x162dea.GetVehicleMods = _0x2266ce
          _0x1d11a1.g.exports('GetVehicleMods', _0x2266ce)
        },
        908: function (_0x294a37, _0x78e653, _0x4d2150) {
          'use strict'
          var _0x10b2d8 =
              (this && this['__createBinding']) ||
              (Object.create
                ? function (_0x2e2a1e, _0x287881, _0x5aa2ae, _0x1c20c9) {
                    if (_0x1c20c9 === undefined) {
                      _0x1c20c9 = _0x5aa2ae
                    }
                    Object.defineProperty(_0x2e2a1e, _0x1c20c9, {
                      enumerable: true,
                      get: function () {
                        return _0x287881[_0x5aa2ae]
                      },
                    })
                  }
                : function (_0x1077a9, _0x465442, _0x3262fb, _0x3748b3) {
                    if (_0x3748b3 === undefined) {
                      _0x3748b3 = _0x3262fb
                    }
                    _0x1077a9[_0x3748b3] = _0x465442[_0x3262fb]
                  }),
            _0xbeadf9 =
              (this && this['__setModuleDefault']) ||
              (Object.create
                ? function (_0x9d4940, _0x17b0bf) {
                    Object.defineProperty(_0x9d4940, 'default', {
                      enumerable: true,
                      value: _0x17b0bf,
                    })
                  }
                : function (_0x565ae9, _0xf32548) {
                    _0x565ae9.default = _0xf32548
                  }),
            _0x2a6b4c =
              (this && this['__importStar']) ||
              function (_0x2ead01) {
                if (_0x2ead01 && _0x2ead01['__esModule']) {
                  return _0x2ead01
                }
                var _0xa31d75 = {}
                if (_0x2ead01 != null) {
                  for (var _0x4243ed in _0x2ead01)
                    if (
                      _0x4243ed !== 'default' &&
                      Object.prototype.hasOwnProperty.call(_0x2ead01, _0x4243ed)
                    ) {
                      _0x10b2d8(_0xa31d75, _0x2ead01, _0x4243ed)
                    }
                }
                return _0xbeadf9(_0xa31d75, _0x2ead01), _0xa31d75
              }
          Object.defineProperty(_0x78e653, '__esModule', { value: true })
          _0x78e653.StoreVehicleInGarage =
            _0x78e653.OpenGarageVehicleList =
            _0x78e653.GetCurrentGarageData =
            _0x78e653.GetCurrentGarageCoords =
            _0x78e653.GetCurrentGarage =
            _0x78e653.getPlayerVehiclesByCharacterId =
            _0x78e653.FindParkingSpot =
            _0x78e653.IsOnParkingSpot =
            _0x78e653.GetGarages =
            _0x78e653.GetGarageList =
              void 0
          const _0x305664 = _0x2a6b4c(_0x4d2150(120)),
            _0x4e1900 = _0x2a6b4c(_0x4d2150(30))
          let _0x1ba925,
            _0x462e57 = 0
          function _0x1951be(_0x1237ab) {
            return _0x1237ab.split('/').pop().split('.').shift()
          }
          function _0x104ff7() {
            const _0x41c43e = _0x4d2150(492),
              _0x3b67e3 = { _0x2ae574: _0x3a5949 }
            return (
              _0x41c43e.keys().forEach((_0x15bde0) => {
                const _0x3a5949 = _0x41c43e(_0x15bde0),
                  _0x2ae574 = _0x1951be(_0x15bde0)
              }),
              _0x3b67e3
            )
          }
          setImmediate(() => {
            _0x1ba925 = _0x104ff7()
            Object.entries(_0x1ba925).forEach(([_0x2f367d, _0x2ff683]) => {
              _0x4d2150.g.exports['tw-polyzone'].AddBoxZone(
                'parking_location',
                _0x2ff683.location.vectors,
                _0x2ff683.location.length,
                _0x2ff683.location.width,
                _0x2ff683.location.options
              )
            })
            const _0x544295 = Object.keys(_0x1ba925).length
            console.log('[INIT] Garages Loaded: ' + _0x544295)
          })
          function _0x1d513b() {
            const _0x2c7705 = []
            for (let _0x44c608 in _0x1ba925) {
              _0x2c7705.push({
                id: _0x1ba925[_0x44c608].garage_id,
                name: _0x1ba925[_0x44c608].name,
              })
            }
            return _0x2c7705
          }
          _0x78e653.GetGarageList = _0x1d513b
          _0x4d2150.g.exports('GetGarageList', _0x1d513b)
          function _0x4e3bf1() {
            return _0x1ba925
          }
          _0x78e653.GetGarages = _0x4e3bf1
          _0x4d2150.g.exports('GetGarages', _0x4e3bf1)
          function _0x4c0861(_0x5177e3, _0x39995e, _0x3bea94) {
            const _0x2ff1b8 = GetEntityCoords(Number(_0x5177e3), false)
            let _0x55ec32 = false,
              _0x3d4909 = 0
            for (let _0x2e687e in _0x1ba925) {
              const _0x45b0aa = _0x1ba925[_0x2e687e].parking_spots
              for (let _0x35a072 in _0x45b0aa) {
                const _0x48fb0a = Vdist(
                  _0x2ff1b8[0],
                  _0x2ff1b8[1],
                  _0x2ff1b8[2],
                  _0x45b0aa[_0x35a072].coords.x,
                  _0x45b0aa[_0x35a072].coords.y,
                  _0x45b0aa[_0x35a072].coords.z
                )
                if (_0x39995e) {
                  _0x3d4909 = Number(_0x3bea94)
                } else {
                  _0x3d4909 = Number(_0x45b0aa[_0x35a072].distance)
                }
                if (_0x48fb0a < _0x3d4909) {
                  if (_0x55ec32) {
                    return
                  }
                  _0x55ec32 = true
                }
              }
            }
            return _0x55ec32
          }
          _0x78e653.IsOnParkingSpot = _0x4c0861
          _0x4d2150.g.exports('IsOnParkingSpot', _0x4c0861)
          function _0x2a41b1(_0x365d68, _0x2638f8, _0x3da0d0) {
            const _0x52a242 = GetEntityCoords(Number(_0x365d68), false)
            let _0x5cb533 = false,
              _0x1a92a2 = {},
              _0x2f75d3 = 0,
              _0x2f298c = 0
            for (let _0x119595 in _0x1ba925) {
              const _0x91def7 = _0x1ba925[_0x119595].parking_spots
              for (let _0x543cf6 in _0x91def7) {
                const _0x36859d = Vdist(
                  _0x52a242[0],
                  _0x52a242[1],
                  _0x52a242[2],
                  _0x91def7[_0x543cf6].coords.x,
                  _0x91def7[_0x543cf6].coords.y,
                  _0x91def7[_0x543cf6].coords.z
                )
                _0x2f298c++
                _0x2638f8
                  ? (_0x2f75d3 = Number(_0x3da0d0))
                  : (_0x2f75d3 = Number(_0x91def7[_0x543cf6].distance))
                if (_0x36859d < _0x2f75d3) {
                  if (_0x5cb533) {
                    return
                  }
                  return (
                    (_0x5cb533 = true),
                    (_0x1a92a2 = {
                      id: _0x2f298c,
                      type: _0x91def7[_0x543cf6].type,
                      size: _0x91def7[_0x543cf6].size,
                      distance: _0x91def7[_0x543cf6].distance,
                      heading: _0x91def7[_0x543cf6].heading,
                      coords: _0x91def7[_0x543cf6].coords,
                    }),
                    [_0x5cb533, _0x1a92a2]
                  )
                }
              }
            }
          }
          _0x78e653.FindParkingSpot = _0x2a41b1
          _0x4d2150.g.exports('FindParkingSpot', _0x2a41b1)
          async function _0x20cf56(_0x4cdb4e) {
            const _0xf33bad = await RPC.execute(
              'arp:vehicles:getPlayerVehiclesByCharacterId',
              _0x4cdb4e
            )
            return _0xf33bad
          }
          _0x78e653.getPlayerVehiclesByCharacterId = _0x20cf56
          _0x4d2150.g.exports('getPlayerVehiclesByCharacterId', _0x20cf56)
          function _0x1a90c9() {
            const _0x934bc2 = GetEntityCoords(PlayerPedId(), false)
            let _0x3949f9 = undefined
            for (let _0x598a65 in _0x1ba925) {
              const _0x433081 = _0x1ba925[_0x598a65].parking_spots
              for (let _0x23a7d3 in _0x433081) {
                const _0x9b0acf = Vdist(
                  _0x934bc2[0],
                  _0x934bc2[1],
                  _0x934bc2[2],
                  _0x433081[_0x23a7d3].coords.x,
                  _0x433081[_0x23a7d3].coords.y,
                  _0x433081[_0x23a7d3].coords.z
                )
                _0x9b0acf < 4 && (_0x3949f9 = _0x1ba925[_0x598a65].garage_id)
              }
            }
            return _0x3949f9
          }
          _0x78e653.GetCurrentGarage = _0x1a90c9
          _0x4d2150.g.exports('GetCurrentGarage', _0x1a90c9)
          function _0x40c0a7() {
            const _0x12e952 = GetEntityCoords(PlayerPedId(), false)
            let _0x468929 = undefined
            for (let _0x387838 in _0x1ba925) {
              const _0x56204b = _0x1ba925[_0x387838].parking_spots
              for (let _0x74a6c7 in _0x56204b) {
                const _0x569ff6 = Vdist(
                  _0x12e952[0],
                  _0x12e952[1],
                  _0x12e952[2],
                  _0x56204b[_0x74a6c7].coords.x,
                  _0x56204b[_0x74a6c7].coords.y,
                  _0x56204b[_0x74a6c7].coords.z
                )
                _0x569ff6 < 1.5 &&
                  (_0x468929 = {
                    x: _0x56204b[_0x74a6c7].coords.x,
                    y: _0x56204b[_0x74a6c7].coords.y,
                    z: _0x56204b[_0x74a6c7].coords.z,
                    h: _0x56204b[_0x74a6c7].heading,
                  })
              }
            }
            return _0x468929
          }
          _0x78e653.GetCurrentGarageCoords = _0x40c0a7
          function _0x5f5297() {
            const _0x41e61d = GetEntityCoords(PlayerPedId(), false)
            let _0x12acdd = undefined
            for (let _0x54817e in _0x1ba925) {
              const _0x4c7bb9 = _0x1ba925[_0x54817e].parking_spots
              for (let _0x45a777 in _0x4c7bb9) {
                const _0xdb2212 = Vdist(
                  _0x41e61d[0],
                  _0x41e61d[1],
                  _0x41e61d[2],
                  _0x4c7bb9[_0x45a777].coords.x,
                  _0x4c7bb9[_0x45a777].coords.y,
                  _0x4c7bb9[_0x45a777].coords.z
                )
                _0xdb2212 < 4 && (_0x12acdd = _0x1ba925[_0x54817e])
              }
            }
            return _0x12acdd
          }
          _0x78e653.GetCurrentGarageData = _0x5f5297
          on('tw-polyzone:enter', async (_0xee2881, _0xf6312) => {})
          on('tw-polyzone:exit', (_0x36aa6a, _0x1b42e9) => {})
          async function _0x1802c5() {
            const _0x316ad6 = _0x4d2150.g.exports.isPed.isPed('cid'),
              _0x5d4609 = _0x4d2150.g.exports.isPed.isPed('myjob'),
              _0x1426fa = _0x1a90c9(),
              _0x2fb989 = _0x40c0a7(),
              _0x42c7cb = _0x5f5297()
            if (_0x42c7cb.type === 'business') {
              const _0x323ccb = _0x4d2150.g.exports.isPed.isPed('cid'),
                _0x453cee = await RPC.execute(
                  'tw-business:hasGarageAccess',
                  _0x323ccb,
                  _0x42c7cb.business_id
                )
              if (!_0x453cee) {
                emit(
                  'DoLongHudText',
                  "You don't have access to this parking spot.",
                  2
                )
                return
              }
            }
            if (_0x42c7cb.type === 'shared') {
              let _0x154fbf = false
              if (Array.isArray(_0x42c7cb.job)) {
                for (
                  let _0x158ef9 = 0;
                  _0x158ef9 < _0x42c7cb.job.length;
                  _0x158ef9++
                ) {
                  _0x5d4609 === _0x42c7cb.job[_0x158ef9] && (_0x154fbf = true)
                }
              } else {
                _0x5d4609 === _0x42c7cb.job && (_0x154fbf = true)
              }
              if (!_0x154fbf) {
                emit(
                  'DoLongHudText',
                  "You don't have access to this parking spot.",
                  2
                )
                return
              }
            }
            if (_0x42c7cb.type !== 'shared') {
              const _0x52b33b = await RPC.execute(
                  'arp:vehicles:getPlayerVehicles',
                  _0x316ad6,
                  _0x1426fa
                ),
                _0xcc4faa = []
              if (_0x52b33b.length === 0) {
                return emit(
                  'DoLongHudText',
                  "You don't have any vehicles parked here.",
                  2
                )
              }
              Object.entries(_0x52b33b).forEach(([_0x656c2, _0x23f5f7]) => {
                const _0x2061a2 =
                  _0x23f5f7.damage !== undefined
                    ? JSON.parse(_0x23f5f7.damage)
                    : undefined
                let _0x450f56 = 'Engine: 100% | Body: 100%'
                _0x2061a2 &&
                  _0x2061a2.engine !== undefined &&
                  _0x2061a2.body !== undefined &&
                  (_0x450f56 = _0x31e37c(_0x2061a2, _0x23f5f7.model))
                const _0x4cb21e = {
                  key: {
                    id: _0x23f5f7.id,
                    model: _0x23f5f7.model,
                    fuel: _0x23f5f7.fuel,
                    damage: _0x23f5f7.damage,
                    appearance: _0x23f5f7.appearance,
                    mods: _0x23f5f7.mods,
                    plate: _0x23f5f7.license_plate,
                    engine_damage: _0x23f5f7.engine_damage,
                    body_damage: _0x23f5f7.body_damage,
                    current_garage: _0x23f5f7.current_garage,
                    coords: _0x2fb989,
                  },
                  title: _0x23f5f7.model,
                  description: 'Plate: ' + _0x23f5f7.license_plate,
                  extraAction: 'arp:vehicles:preview',
                  children: [
                    {
                      title: 'Vehicle Status',
                      description: _0x450f56,
                    },
                    {
                      title: 'Take Out',
                      action: 'arp:vehicles:takeout',
                      key: {
                        id: _0x23f5f7.id,
                        model: _0x23f5f7.model,
                        fuel: _0x23f5f7.fuel,
                        damage: _0x23f5f7.damage,
                        appearance: _0x23f5f7.appearance,
                        mods: _0x23f5f7.mods,
                        plate: _0x23f5f7.license_plate,
                        engine_damage: _0x23f5f7.engine_damage,
                        body_damage: _0x23f5f7.body_damage,
                        current_garage: _0x23f5f7.current_garage,
                        coords: _0x2fb989,
                      },
                    },
                  ],
                }
                _0xcc4faa.push(_0x4cb21e)
              })
              _0x4d2150.g.exports['tw-interface'].showContextMenu(_0xcc4faa)
            } else {
              const _0x317836 = [],
                _0x5b2cf7 = await RPC.execute(
                  'arp:vehicles:getPlayerVehicles',
                  _0x316ad6,
                  _0x1426fa
                ),
                _0x1f4f6d = await RPC.execute(
                  'arp:vehicles:getSharedVehicles',
                  _0x42c7cb.job,
                  _0x1426fa
                )
              if (_0x5b2cf7.length > 0) {
                const _0x1d6a2f = []
                Object.entries(_0x5b2cf7).forEach(([_0x131a51, _0x3a15a8]) => {
                  const _0x16fbd0 =
                    _0x3a15a8.damage !== undefined
                      ? JSON.parse(_0x3a15a8.damage)
                      : undefined
                  let _0x59f923 = 'Engine: 100% | Body: 100%'
                  _0x16fbd0 &&
                    _0x16fbd0.engine !== undefined &&
                    _0x16fbd0.body !== undefined &&
                    (_0x59f923 = _0x31e37c(_0x16fbd0, _0x3a15a8.model))
                  const _0x59feb4 = {
                    key: {
                      id: _0x3a15a8.id,
                      model: _0x3a15a8.model,
                      fuel: _0x3a15a8.fuel,
                      damage: _0x3a15a8.damage,
                      appearance: _0x3a15a8.appearance,
                      mods: _0x3a15a8.mods,
                      plate: _0x3a15a8.license_plate,
                      engine_damage: _0x3a15a8.engine_damage,
                      body_damage: _0x3a15a8.body_damage,
                      current_garage: _0x3a15a8.current_garage,
                      coords: _0x2fb989,
                    },
                    title: _0x3a15a8.model,
                    description: 'Plate: ' + _0x3a15a8.license_plate,
                    extraAction: 'arp:vehicles:preview',
                    children: [
                      {
                        title: 'Vehicle Status',
                        description: _0x59f923,
                      },
                      {
                        title: 'Take Out',
                        action: 'arp:vehicles:takeout',
                        key: {
                          id: _0x3a15a8.id,
                          model: _0x3a15a8.model,
                          fuel: _0x3a15a8.fuel,
                          damage: _0x3a15a8.damage,
                          appearance: _0x3a15a8.appearance,
                          mods: _0x3a15a8.mods,
                          plate: _0x3a15a8.license_plate,
                          engine_damage: _0x3a15a8.engine_damage,
                          body_damage: _0x3a15a8.body_damage,
                          current_garage: _0x3a15a8.current_garage,
                          coords: _0x2fb989,
                        },
                      },
                    ],
                  }
                  _0x1d6a2f.push(_0x59feb4)
                })
                _0x317836.push({
                  title: 'Personal Vehicles',
                  description: 'List of owned vehicles.',
                  children: _0x1d6a2f,
                })
              }
              if (_0x1f4f6d.length > 0) {
                const _0x327624 = [],
                  _0x3d8b65 = [],
                  _0x3af46c = [],
                  _0x491b15 = [],
                  _0x53d365 = [],
                  _0x180fa9 = [],
                  _0x1e3dc7 = [],
                  _0x2ae417 = []
                Object.entries(_0x1f4f6d).forEach(([_0x527ae7, _0x5637ee]) => {
                  const _0x57f5e4 =
                    _0x5637ee.damage !== undefined
                      ? JSON.parse(_0x5637ee.damage)
                      : undefined
                  let _0x536235 = 'Engine: 100% | Body: 100%'
                  _0x57f5e4 &&
                    _0x57f5e4.engine !== undefined &&
                    _0x57f5e4.body !== undefined &&
                    (_0x536235 = _0x31e37c(_0x57f5e4, _0x5637ee.model))
                  const _0x519f7 = {
                    key: {
                      id: _0x5637ee.id,
                      model: _0x5637ee.model,
                      fuel: _0x5637ee.fuel,
                      damage: _0x5637ee.damage,
                      appearance: _0x5637ee.appearance,
                      mods: _0x5637ee.mods,
                      plate: _0x5637ee.license_plate,
                      engine_damage: _0x5637ee.engine_damage,
                      body_damage: _0x5637ee.body_damage,
                      current_garage: _0x5637ee.current_garage,
                      coords: _0x2fb989,
                    },
                    title: _0x5637ee.model,
                    description: 'Plate: ' + _0x5637ee.license_plate,
                    extraAction: 'arp:vehicles:preview',
                    children: [
                      {
                        title: 'Vehicle Status',
                        description: _0x536235,
                      },
                      {
                        title: 'Take Out',
                        action: 'arp:vehicles:takeout',
                        key: {
                          id: _0x5637ee.id,
                          model: _0x5637ee.model,
                          fuel: _0x5637ee.fuel,
                          damage: _0x5637ee.damage,
                          appearance: _0x5637ee.appearance,
                          mods: _0x5637ee.mods,
                          plate: _0x5637ee.license_plate,
                          engine_damage: _0x5637ee.engine_damage,
                          body_damage: _0x5637ee.body_damage,
                          current_garage: _0x5637ee.current_garage,
                          coords: _0x2fb989,
                        },
                      },
                    ],
                  }
                  switch (_0x5637ee.model) {
                    case 'npolvic':
                      _0x3d8b65.push(_0x519f7)
                      break
                    case 'npolexp':
                      _0x3af46c.push(_0x519f7)
                      break
                    case 'npolchar':
                      _0x491b15.push(_0x519f7)
                      break
                    case 'npolstang':
                      _0x53d365.push(_0x519f7)
                      break
                    case 'npolvette':
                      _0x53d365.push(_0x519f7)
                      break
                    case 'npolchal':
                      _0x53d365.push(_0x519f7)
                      break
                    case 'npolmm':
                      _0x180fa9.push(_0x519f7)
                      break
                    case 'emsnspeedo':
                      _0x1e3dc7.push(_0x519f7)
                      break
                    case 'emshoe':
                      _0x2ae417.push(_0x519f7)
                      break
                    default:
                      _0x327624.push(_0x519f7)
                      break
                  }
                })
                _0x3d8b65.length > 0 &&
                  _0x327624.push({
                    title: 'Crown Vics',
                    description:
                      _0x3d8b65.length +
                      ' ' +
                      (_0x3d8b65.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x3d8b65,
                  })
                if (_0x3af46c.length > 0) {
                  _0x327624.push({
                    title: 'Explorers',
                    description:
                      _0x3af46c.length +
                      ' ' +
                      (_0x3af46c.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x3af46c,
                  })
                }
                if (_0x491b15.length > 0) {
                  _0x327624.push({
                    title: 'Chargers',
                    description:
                      _0x491b15.length +
                      ' ' +
                      (_0x491b15.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x491b15,
                  })
                }
                if (_0x53d365.length > 0) {
                  _0x327624.push({
                    title: 'Interceptors',
                    description:
                      _0x53d365.length +
                      ' ' +
                      (_0x53d365.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x53d365,
                  })
                }
                _0x180fa9.length > 0 &&
                  _0x327624.push({
                    title: 'Motorcycles',
                    description:
                      _0x180fa9.length +
                      ' ' +
                      (_0x180fa9.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x180fa9,
                  })
                _0x1e3dc7.length > 0 &&
                  _0x327624.push({
                    title: 'Speedos',
                    description:
                      _0x1e3dc7.length +
                      ' ' +
                      (_0x1e3dc7.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x1e3dc7,
                  })
                _0x2ae417.length > 0 &&
                  _0x327624.push({
                    title: 'Tahoes',
                    description:
                      _0x2ae417.length +
                      ' ' +
                      (_0x2ae417.length === 1 ? 'Vehicle' : 'Vehicles'),
                    children: _0x2ae417,
                  })
                _0x317836.push({
                  title: 'Shared Vehicles',
                  description: 'List of shared vehicles.',
                  children: _0x327624,
                })
              }
              if (_0x317836.length === 0) {
                return emit(
                  'DoLongHudText',
                  'No personal or shared vehicles are parked here.',
                  2
                )
              }
              _0x4d2150.g.exports['tw-interface'].showContextMenu(_0x317836)
            }
          }
          _0x78e653.OpenGarageVehicleList = _0x1802c5
          async function _0xfa62d1(_0x2a9907) {
            const _0x3400ce = _0x5f5297(),
              _0x250605 = _0x4d2150.g.exports.isPed.isPed('myjob')
            if (_0x3400ce.type === 'business') {
              const _0x1ccad7 = _0x4d2150.g.exports.isPed.isPed('cid'),
                _0x2e74d2 = await RPC.execute(
                  'tw-business:hasGarageAccess',
                  _0x1ccad7,
                  _0x3400ce.business_id
                )
              if (!_0x2e74d2) {
                emit(
                  'DoLongHudText',
                  "You don't have access to this parking spot.",
                  2
                )
                return
              }
            }
            if (_0x3400ce.type === 'shared') {
              let _0x4a03f6 = false
              if (Array.isArray(_0x3400ce.job)) {
                for (
                  let _0x4287a6 = 0;
                  _0x4287a6 < _0x3400ce.job.length;
                  _0x4287a6++
                ) {
                  if (_0x250605 === _0x3400ce.job[_0x4287a6]) {
                    _0x4a03f6 = true
                  }
                }
              } else {
                _0x250605 === _0x3400ce.job && (_0x4a03f6 = true)
              }
              if (!_0x4a03f6) {
                emit(
                  'DoLongHudText',
                  "You don't have access to this parking spot.",
                  2
                )
                return
              }
            }
            const _0x461ca2 = GetVehicleModelNumberOfSeats(
              GetEntityModel(_0x2a9907)
            )
            for (let _0x2ff6be = -1; _0x2ff6be < _0x461ca2 - 1; _0x2ff6be += 1) {
              const _0x2f5513 = GetPedInVehicleSeat(_0x2a9907, _0x2ff6be)
              if (_0x2f5513 && _0x2f5513 !== PlayerPedId()) {
                emit('DoLongHudText', 'The vehicle is not empty!', 2)
                return
              }
            }
            if (DoesEntityExist(Number(_0x2a9907))) {
              const _0x36ae51 = GetVehicleNumberPlateText(Number(_0x2a9907)),
                _0x457fd7 = DecorGetInt(Number(_0x2a9907), 'CurrentFuel') || 50,
                _0x52e0b3 = _0x4e1900.FetchVehicleDamage(Number(_0x2a9907)),
                _0x4e02c2 = _0x4e1900.GetVehicleAppearance(Number(_0x2a9907)),
                _0x231c20 = _0x305664.GetVehicleMods(Number(_0x2a9907)),
                [_0x4cd84d, _0x28ede7] = await RPC.execute(
                  'arp:vehicles:canStore',
                  _0x36ae51,
                  _0x457fd7,
                  _0x4e02c2,
                  _0x231c20,
                  _0x52e0b3,
                  _0x3400ce.garage_id,
                  _0x3400ce.parking_limit
                )
              _0x4cd84d
                ? DeleteEntity(_0x2a9907)
                : emit('DoLongHudText', _0x28ede7, 2)
            }
          }
          _0x78e653.StoreVehicleInGarage = _0xfa62d1
          RegisterInterfaceCallback(
            'arp:vehicles:preview',
            (_0x4c140a, _0x4cab85) => {
              _0x4cab85({
                data: {},
                meta: {
                  ok: false,
                  message: '',
                },
              })
              if (DoesEntityExist(_0x462e57)) {
                DeleteEntity(_0x462e57)
              }
              const _0x273ba4 = _0x4c140a.key.coords
              RequestModel(_0x4c140a.key.model)
              _0x462e57 = CreateVehicle(
                _0x4c140a.key.model,
                Number(_0x273ba4.x),
                Number(_0x273ba4.y),
                Number(_0x273ba4.z),
                Number(_0x273ba4.h),
                false,
                true
              )
              SetEntityAlpha(_0x462e57, 100, false)
              FreezeEntityPosition(_0x462e57, true)
              SetEntityCollision(_0x462e57, false, true)
              let _0x23633f = [],
                _0x4744cf = []
              _0x4c140a.key.mods !== undefined &&
                (_0x23633f = JSON.parse(_0x4c140a.key.mods))
              _0x4c140a.key.appearance !== undefined &&
                (_0x4744cf = JSON.parse(_0x4c140a.key.appearance))
              _0x305664.SetVehicleMods(_0x462e57, _0x23633f)
              _0x4e1900.SetVehicleAppearance(_0x462e57, _0x4744cf)
              _0x4c140a.key.damage !== undefined &&
                _0x4e1900.RestoreVehicleDamage(
                  _0x462e57,
                  JSON.parse(_0x4c140a.key.damage) || []
                )
              SetVehicleNumberPlateText(_0x462e57, _0x4c140a.key.plate)
            }
          )
          RegisterInterfaceCallback(
            'arp:vehicles:takeout',
            async (_0x526227, _0x3a96f4) => {
              _0x3a96f4({
                data: {},
                meta: {
                  ok: true,
                  message: '',
                },
              })
              DeleteEntity(_0x462e57)
              const _0x28d8e8 = await RPC.execute(
                'arp:vehicles:spawnGarageVehicle',
                _0x526227.key.plate,
                _0x526227.key.model,
                _0x526227.key.coords
              )
              if (_0x28d8e8 === 0) {
                return
              }
              const _0x22fbba = NetworkGetEntityFromNetworkId(_0x28d8e8)
              emit('vehicle:keys:addNew:login', _0x526227.key.plate)
              let _0x303e14 = [],
                _0x176270 = []
              _0x526227.key.mods !== undefined &&
                (_0x303e14 = JSON.parse(_0x526227.key.mods))
              _0x526227.key.appearance !== undefined &&
                (_0x176270 = JSON.parse(_0x526227.key.appearance))
              _0x305664.SetVehicleMods(_0x22fbba, _0x303e14)
              _0x4e1900.SetVehicleAppearance(_0x22fbba, _0x176270)
              _0x526227.key.damage !== undefined &&
                _0x4e1900.RestoreVehicleDamage(
                  _0x22fbba,
                  JSON.parse(_0x526227.key.damage) || []
                )
              SetVehicleNumberPlateText(_0x22fbba, _0x526227.key.plate)
              _0x526227.key.fuel !== undefined
                ? (SetVehicleFuelLevel(_0x22fbba, _0x526227.key.fuel),
                  DecorSetInt(_0x22fbba, 'CurrentFuel', _0x526227.key.fuel))
                : (SetVehicleFuelLevel(_0x22fbba, 50),
                  DecorSetInt(_0x22fbba, 'CurrentFuel', _0x526227.key.fuel))
            }
          )
          function _0x31e37c(_0x221e10, _0x199996) {
            return _0x221e10.engine !== undefined && _0x221e10.body !== undefined
              ? 'Engine: ' +
                  Math.floor((_0x221e10.engine / 1000) * 100) +
                  '% | Body: ' +
                  Math.floor((_0x221e10.body / 1000) * 100) +
                  '%'
              : 'Engine: 100% | Body: 100%'
          }
          on('tw-interface:application-closed', (_0x218e67) => {
            if (_0x218e67 !== 'contextmenu') {
              return
            }
            if (!DoesEntityExist(_0x462e57)) {
              return
            }
            FreezeEntityPosition(_0x462e57, false)
            SetEntityCollision(_0x462e57, true, true)
            DeleteEntity(_0x462e57)
          })
        },
        17: function (_0x192c9e, _0x168ad3, _0x2ccfcf) {
          'use strict'
          var _0x553d10
          _0x553d10 = { value: true }
          _0x553d10 =
            _0x553d10 =
            _0x553d10 =
            _0x553d10 =
            _0x553d10 =
            _0x553d10 =
              void 0
          function _0x201db4(_0x3a3e7c) {}
          _0x553d10 = _0x201db4
          function _0x562e3c(_0x255376, _0x49f1ab) {
            const _0x5e6562 = _0x255376 || GetVehiclePedIsIn(PlayerPedId(), false)
            return DecorExistOn(_0x5e6562, 'CurrentFuel')
              ? DecorSetInt(_0x5e6562, 'CurrentFuel', _0x49f1ab)
              : (SetVehicleFuelLevel(_0x5e6562, _0x49f1ab),
                DecorSetInt(_0x5e6562, 'CurrentFuel', _0x49f1ab),
                true)
          }
          _0x553d10 = _0x562e3c
          _0x2ccfcf.g.exports('SetVehicleFuel', _0x562e3c)
          function _0x549f5c(_0x467a8f) {
            const _0x25be6c = _0x467a8f || GetVehiclePedIsIn(PlayerPedId(), false)
            return DecorExistOn(_0x25be6c, 'CurrentFuel')
              ? DecorGetInt(_0x25be6c, 'CurrentFuel')
              : (DecorSetInt(_0x25be6c, 'CurrentFuel', 50), 50)
          }
          _0x553d10 = _0x549f5c
          _0x2ccfcf.g.exports('CurrentFuel', _0x549f5c)
          function _0x5498f1() {}
          _0x553d10 = _0x5498f1
          async function _0x29690e(_0x3627c6, _0x36e3a6) {}
          _0x553d10 = _0x29690e
          function _0x5b5c8c() {
            return emit('InteractSound_SV:PlayOnSource', 'Alarm3', 0.1)
          }
          _0x553d10 = _0x5b5c8c
        },
        369: function (_0x1bffd9, _0x3179f5, _0x55523c) {
          'use strict'
          var _0x3fb254 =
              (this && this['__createBinding']) ||
              (Object.create
                ? function (_0x3625d0, _0x2530d8, _0x21e78e, _0x323031) {
                    if (_0x323031 === undefined) {
                      _0x323031 = _0x21e78e
                    }
                    Object.defineProperty(_0x3625d0, _0x323031, {
                      enumerable: true,
                      get: function () {
                        return _0x2530d8[_0x21e78e]
                      },
                    })
                  }
                : function (_0x2d341b, _0x3f4b3f, _0x1c1e6a, _0x5485fc) {
                    if (_0x5485fc === undefined) {
                      _0x5485fc = _0x1c1e6a
                    }
                    _0x2d341b[_0x5485fc] = _0x3f4b3f[_0x1c1e6a]
                  }),
            _0x271ebc =
              (this && this['__setModuleDefault']) ||
              (Object.create
                ? function (_0x1f9e25, _0x184d23) {
                    Object.defineProperty(_0x1f9e25, 'default', {
                      enumerable: true,
                      value: _0x184d23,
                    })
                  }
                : function (_0x1b3aa8, _0x156968) {
                    _0x1b3aa8.default = _0x156968
                  }),
            _0x197e89 =
              (this && this['__importStar']) ||
              function (_0x150896) {
                if (_0x150896 && _0x150896['__esModule']) {
                  return _0x150896
                }
                var _0x5e877e = {}
                if (_0x150896 != null) {
                  for (var _0x574de8 in _0x150896)
                    if (
                      _0x574de8 !== 'default' &&
                      Object.prototype.hasOwnProperty.call(_0x150896, _0x574de8)
                    ) {
                      _0x3fb254(_0x5e877e, _0x150896, _0x574de8)
                    }
                }
                _0x271ebc(_0x5e877e, _0x150896)
                return _0x5e877e
              }
          Object.defineProperty(_0x3179f5, '__esModule', { value: true })
          _0x3179f5.GetHarnessLevel =
            _0x3179f5.VehicleHasHarness =
            _0x3179f5.HasHarnessOn =
            _0x3179f5.HasSeatBeltOn =
            _0x3179f5.SetSeatBelt =
            _0x3179f5.SetHarness =
              void 0
          const _0x23e573 = _0x55523c(615),
            _0x1afc27 = _0x197e89(_0x55523c(450))
          function _0x32eccd() {
            return false
          }
          _0x3179f5.SetHarness = _0x32eccd
          function _0x2f6da9(_0x3aac6f) {
            return (_0x360f8c = _0x3aac6f)
          }
          _0x3179f5.SetSeatBelt = _0x2f6da9
          function _0x24cc15() {
            return _0x360f8c
          }
          _0x3179f5.HasSeatBeltOn = _0x24cc15
          function _0x4c8220() {
            return _0x209d15
          }
          _0x3179f5.HasHarnessOn = _0x4c8220
          function _0x1c1d0b(_0x3a4620) {
            return _0x209d15
          }
          _0x3179f5.VehicleHasHarness = _0x1c1d0b
          function _0x2eb2b8(_0x1d1176) {
            return _0x464eed
          }
          _0x3179f5.GetHarnessLevel = _0x2eb2b8
          let _0x6c8acb = null && [
              'bifta',
              'blazer',
              'brawler',
              'dubsta3',
              'dune',
              'rebel2',
              'sandking',
              'trophytruck',
              'sanchez',
              'sanchez2',
              'blazer',
              'enduro',
              'pol9',
              'police3',
              'sheriff2',
              'hwaycar',
              'fbi2',
              'bf400',
            ],
            _0x2945df = ['ENDURO', 'sanchez', 'sanchez2'],
            _0x82cc08 = ['deluxo', 'ruiner2']
          const _0x472522 = new Map()
          let _0x1caa75 = 0,
            _0x4738ea = GetEntityCoords(PlayerPedId(), false),
            _0x405534 = 0,
            _0x4b9913 = 0,
            _0x4c286e = 0,
            _0x3f4fe8 = 0,
            _0x5f3f70 = GetEntityVelocity(
              GetVehiclePedIsIn(PlayerPedId(), false)
            ),
            _0x37259e = 0,
            _0x16d738 = 0,
            _0x21044a = undefined,
            _0x518d6e = undefined,
            _0x4a1fe2 = undefined,
            _0x464eed = 0,
            _0x2c4ce7 = false,
            _0x44f7e0 = undefined,
            _0x17c004 = false,
            _0x360f8c = false,
            _0x209d15 = false
          const _0x27c4df = async () => {
              let _0x4073fc = GetVehiclePedIsIn(PlayerPedId(), false),
                _0x29ca6c = GetOffsetFromEntityInWorldCoords(_0x4073fc, 1, 0, 1)
              SetEntityCoords(
                _0x21044a,
                _0x29ca6c[0],
                _0x29ca6c[1],
                _0x29ca6c[2],
                true,
                true,
                true,
                true
              )
              await (0, _0x23e573.Delay)(1)
              SetPedToRagdoll(_0x21044a, 5511, 5511, 0, false, false, false)
              SetEntityVelocity(
                _0x21044a,
                _0x5f3f70[0] * 4,
                _0x5f3f70[1] * 4,
                _0x5f3f70[2] * 4
              )
              let _0x488d56 = Math.ceil(GetEntitySpeed(_0x21044a) * 8)
              if (
                IsPedWearingHelmet(_0x21044a) &&
                IsThisModelABicycle(GetEntityModel(_0x4073fc))
              ) {
                let _0x37b09f = GetEntityHealth(_0x21044a) - 1
                _0x37b09f > _0x488d56 && (_0x37b09f = _0x488d56)
                SetEntityHealth(_0x21044a, GetEntityHealth(_0x21044a) - _0x37b09f)
                return
              }
              SetEntityHealth(_0x21044a, GetEntityHealth(_0x21044a) - _0x488d56)
            },
            _0x375b27 = async () => {
              setImmediate(async () => {
                let _0x61d0ef = [1000, 2000, 3000]
                _0x2c4ce7 = true
                _0x1906e9()
                let _0xff614f = await _0x55523c.g.exports['tw-taskbar'].taskBar(
                  _0x61d0ef[Math.floor(Math.random() * 3)],
                  'Taking off Harness',
                  true
                )
                _0xff614f === 100 &&
                  ((_0x209d15 = false),
                  emit('harness', false, _0x464eed),
                  emit('InteractSound_CL:PlayOnOne', 'seatbeltoff', 0.7),
                  emit('DoShortHudText', 'Harness Disabled', 4))
                _0x2c4ce7 = false
              })
            },
            _0x1906e9 = async () => {},
            _0x564af9 = async () => {
              let _0x500453 =
                GetVehicleEngineHealth(_0x518d6e) -
                Math.floor(Math.random() * 101) +
                100
              emit('DoLongHudText', 'Your vehicle has stalled!', 2)
              _0x1afc27.TurnOffEngine(_0x518d6e, true)
              SetVehicleUndriveable(_0x518d6e, true)
              _0x16d738 = 0
              _0x37259e = _0x500453
            },
            _0x15ec03 = () => {
              return _0x17c004
            }
          _0x55523c.g.exports('isStalled', _0x15ec03)
          const _0x22fe4 = (_0x27ed7f, _0x3e1594) => {
              let _0x561ad5 = PlayerPedId()
              for (
                let _0x186514 = -1;
                GetVehicleMaxNumberOfPassengers(_0x518d6e) - 1;
                _0x186514++
              ) {
                let _0x2df2f5 = GetPedInVehicleSeat(_0x518d6e, _0x186514)
                if (_0x2df2f5 !== _0x561ad5 && _0x2df2f5 !== undefined) {
                  let _0x51bb65 = NetworkGetPlayerIndexFromPed(_0x2df2f5)
                  emitNet(_0x27ed7f, _0x51bb65, _0x3e1594)
                }
              }
            },
            _0x4c5202 = () => {
              _0x2c4ce7 = true
              _0x1906e9()
              let _0x246b8d = 0
              _0x209d15
                ? ((_0x246b8d = _0x55523c.g.exports['tw-taskbar'].taskBar(
                    5000,
                    'Taking off Harness',
                    true
                  )),
                  emit('tw-hud:hideharness'),
                  emit('tw-hud:showseatbelt'))
                : ((_0x246b8d = _0x55523c.g.exports['tw-taskbar'].taskBar(
                    5000,
                    'Putting on Harness',
                    true
                  )),
                  emit('tw-hud:showharness'),
                  emit('tw-hud:hideseatbelt'))
              if (_0x246b8d === 100) {
                if (_0x21044a === _0x4a1fe2) {
                  !_0x209d15
                    ? (emit('harness', true, _0x464eed),
                      emit('InteractSound_CL:PlayOnOne', 'seatbelt', 0.1),
                      emit('DoShortHudText', 'Harness Enabled', 4))
                    : (emit('harness', false, _0x464eed),
                      emit('InteractSound_CL:PlayOnOne', 'seatbeltoff', 0.7),
                      emit('DoShortHudText', 'Harness Disabled', 4))
                  _0x209d15 = !_0x209d15
                  _0x360f8c = false
                } else {
                  _0x464eed = 0
                  emit('harness', false, _0x464eed)
                  emit('InteractSound_CL:PlayOnOne', 'seatbeltoff', 0.7)
                  emit('DoShortHudText', 'Harness Disabled', 4)
                  _0x209d15 = false
                  _0x360f8c = false
                }
              }
              _0x2c4ce7 = false
            },
            _0x3e3951 = () => {
              if (!IsPedInAnyVehicle(_0x21044a, false)) {
                return
              }
              if (!_0x360f8c) {
                emit('seatbelt', true)
                emit('InteractSound_CL:PlayOnOne', 'seatbelt', 0.1)
                emit('DoShortHudText', 'Seat Belt Enabled', 4)
              } else {
                emit('seatbelt', false)
                emit('InteractSound_CL:PlayOnOne', 'seatbeltoff', 0.7)
                emit('DoShortHudText', 'Seat Belt Disabled', 4)
              }
              _0x360f8c = !_0x360f8c
            }
          onNet('carhud:ejection:client', (_0x23475b) => {
            ;(_0x5f3f70 = _0x23475b),
              _0x360f8c && Math.floor(Math.random() * 10) + 1 > 8 && _0x27c4df()
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(1)
              _0x17c004 &&
                (await (0, _0x23e573.Delay)(
                  Math.floor(Math.random() * 1001) + 3500
                ),
                _0x1afc27.TurnOnEngine(_0x518d6e, true),
                (_0x17c004 = false))
            }
          })
          let _0x2976b5 = false
          RegisterCommand(
            'togglehandling',
            () => {
              _0x2976b5 = !_0x2976b5
            },
            false
          )
          setImmediate(async () => {
            let _0x2a2fec = GetEntityVelocity(PlayerPedId()),
              _0x2e518c = 0,
              _0x4cf031 = false
            while (true) {
              await (0, _0x23e573.Delay)(1)
              if (IsPedInAnyVehicle(PlayerPedId(), false)) {
                let _0x235efc = GetVehiclePedIsIn(PlayerPedId(), false)
                !_0x4cf031 &&
                  !IsThisModelABike(GetEntityModel(_0x235efc)) &&
                  ((_0x4cf031 = true),
                  emit('InteractSound_CL:PlayOnOne', 'beltalarm', 0.35))
                if (_0x2976b5) {
                  console.log('[DEBUG] Fucked Handling: ' + _0x2976b5)
                  let _0x2b07d6 = IsThisModelABicycle(GetEntityModel(_0x235efc))
                  if (!_0x472522.has(_0x235efc) && !_0x2b07d6) {
                    SetVehiclePetrolTankHealth(_0x235efc, 4000)
                    SetVehicleHandlingFloat(
                      _0x235efc,
                      'CHandlingData',
                      'fWeaponDamageMult',
                      3.5
                    )
                    let _0x2d3e0d = GetVehicleHandlingFloat(
                      _0x235efc,
                      'CHandlingData',
                      'fSteeringLock'
                    )
                    _0x2d3e0d = Math.ceil(_0x2d3e0d * 0.6) + 0.1
                    SetVehicleHandlingFloat(
                      _0x235efc,
                      'CHandlingData',
                      'fSteeringLock',
                      _0x2d3e0d
                    )
                    SetVehicleHandlingField(
                      _0x235efc,
                      'CHandlingData',
                      'fSteeringLock',
                      _0x2d3e0d
                    )
                    let _0x2075f5 = GetVehicleHandlingFloat(
                      _0x235efc,
                      'CHandlingData',
                      'fInitialDriveMaxFlatVel'
                    )
                    if (IsThisModelABike(GetEntityModel(_0x235efc))) {
                      let _0x102059 = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMin'
                      )
                      _0x102059 = _0x102059 * 0.6
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMin',
                        _0x102059
                      )
                      SetVehicleHandlingField(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMin',
                        _0x102059
                      )
                      let _0x116b63 = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMax'
                      )
                      _0x116b63 = _0x116b63 * 0.6
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMax',
                        _0x116b63
                      )
                      SetVehicleHandlingField(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionCurveMax',
                        _0x116b63
                      )
                      let _0x429dee = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fInitialDriveForce'
                      )
                      _0x429dee = _0x429dee * 2.2
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fInitialDriveForce',
                        _0x429dee
                      )
                      let _0x4521ae = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fBrakeForce'
                      )
                      _0x4521ae = _0x4521ae * 1.4
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fBrakeForce',
                        _0x4521ae
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionReboundDamp',
                        5
                      )
                      SetVehicleHandlingField(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionReboundDamp',
                        5
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionCompDamp',
                        5
                      )
                      SetVehicleHandlingField(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionCompDamp',
                        5
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionForce',
                        22
                      )
                      SetVehicleHandlingField(
                        _0x235efc,
                        'CHandlingData',
                        'fSuspensionForce',
                        22
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fCollisionDamageMult',
                        2.5
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fEngineDamageMult',
                        0.12
                      )
                    } else {
                      let _0x24e755 = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fBrakeForce'
                      )
                      _0x24e755 = _0x24e755 * 0.5
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fBrakeForce',
                        _0x24e755
                      )
                      let _0x41a7e1 = GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fInitialDriveForce'
                      )
                      if (_0x41a7e1 < 0.289) {
                        _0x41a7e1 = _0x41a7e1 * 1.05
                        SetVehicleHandlingFloat(
                          _0x235efc,
                          'CHandlingData',
                          'fInitialDriveForce',
                          _0x41a7e1
                        )
                      } else {
                        ;(_0x41a7e1 = _0x41a7e1 * 0.8),
                          SetVehicleHandlingFloat(
                            _0x235efc,
                            'CHandlingData',
                            'fInitialDriveForce',
                            _0x41a7e1
                          )
                      }
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fEngineDamageMult',
                        0.1
                      )
                      SetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fCollisionDamageMult',
                        2.9
                      )
                    }
                    SetVehicleHandlingFloat(
                      _0x235efc,
                      'CHandlingData',
                      'fDeformationDamageMult',
                      1
                    )
                    SetVehicleHasBeenOwnedByPlayer(_0x235efc, true)
                    _0x472522.set(_0x235efc, {
                      fInitialDriveMaxFlatVel: _0x2075f5,
                      fSteeringLock: GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fSteeringLock'
                      ),
                      fTractionLossMult: GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fTractionLossMult'
                      ),
                      fLowSpeedTractionLossMult: GetVehicleHandlingFloat(
                        _0x235efc,
                        'CHandlingData',
                        'fLowSpeedTractionLossMult'
                      ),
                    })
                  } else {
                    await (0, _0x23e573.Delay)(1000)
                  }
                }
                if (GetPedInVehicleSeat(_0x235efc, -1) === PlayerPedId()) {
                  let _0x57ef53 = GetEntityCoords(PlayerPedId(), false)
                  if (IsEntityInAir(_0x235efc)) {
                    _0x2a2fec = GetEntityVelocity(_0x235efc)
                    _0x2e518c = Math.ceil(
                      GetEntitySpeed(GetVehiclePedIsUsing(PlayerPedId()))
                    )
                    if (_0x1caa75 === 1) {
                      _0x405534 = 0
                      _0x4b9913 = 0
                      _0x4738ea = GetEntityCoords(_0x235efc, false)
                      _0x4b9913 = _0x4738ea[2]
                    } else {
                      let _0x32c557 = GetEntityCoords(_0x235efc, false)
                      _0x405534 = _0x4738ea[2]
                      Number(_0x405534) > Number(_0x4b9913) &&
                        _0x1caa75 !== 0 &&
                        ((_0x4b9913 = _0x405534),
                        (_0x4c286e = _0x405534 - _0x4738ea[2]))
                    }
                    _0x1caa75++
                  } else {
                    if (_0x1caa75 > 0) {
                      if (_0x1caa75 > 110) {
                        await (0, _0x23e573.Delay)(333)
                        let _0x45d7d4 = GetEntityCoords(_0x235efc, false),
                          _0x4da7cc = _0x45d7d4[2] - _0x4738ea[2],
                          _0x25d5ab = GetEntityVelocity(_0x235efc)
                        _0x4c286e = _0x4c286e - _0x4da7cc
                        _0x4c286e = _0x4c286e * 0.55
                        _0x1caa75 = Math.ceil(_0x1caa75 * _0x4c286e)
                        let _0x1927a5 = 0,
                          _0x20a392 = 0,
                          _0x5120b3 = 0,
                          _0x2f9701 = 0
                        if (_0x25d5ab[0] < 0) {
                          _0x1927a5 = _0x25d5ab[0]
                          _0x1927a5 = Math.ceil(_0x1927a5 - _0x1927a5 * 2)
                        } else {
                          _0x1927a5 = _0x25d5ab[0]
                        }
                        _0x25d5ab[1] < 0
                          ? ((_0x20a392 = _0x25d5ab[1]),
                            (_0x20a392 = Math.ceil(_0x20a392 - _0x20a392 * 2)))
                          : (_0x20a392 = _0x25d5ab[1])
                        _0x5120b3 = _0x25d5ab[2]
                        _0x2f9701 = _0x2a2fec[2]
                        _0x5120b3 = _0x5120b3 - _0x2f9701
                        let _0x7fd542 = false
                        for (
                          let _0x5ca201 = 1;
                          _0x5ca201 < _0x2945df.length;
                          _0x5ca201++
                        ) {
                          IsVehicleModel(
                            GetVehiclePedIsIn(PlayerPedId(), false),
                            GetHashKey(_0x2945df[_0x5ca201])
                          ) && (_0x7fd542 = true)
                        }
                        _0x7fd542 && (_0x1caa75 = _0x1caa75 - 200)
                        if (
                          IsThisModelABicycle(
                            GetEntityModel(GetVehiclePedIsUsing(PlayerPedId()))
                          )
                        ) {
                          let _0x15cdca = Math.ceil(_0x5120b3 * 200),
                            _0x508d3b = Math.ceil(
                              GetEntitySpeed(
                                GetVehiclePedIsUsing(PlayerPedId())
                              ) * 1.35
                            )
                          if (
                            _0x1caa75 > 550 &&
                            _0x15cdca > _0x1caa75 &&
                            (_0x508d3b < _0x2e518c || _0x508d3b < 2)
                          ) {
                            _0x27c4df()
                          } else {
                            if (_0x1caa75 > 1500 && _0x508d3b < _0x2e518c) {
                              _0x27c4df()
                            }
                          }
                        } else {
                          if (
                            _0x1caa75 > 950 &&
                            IsThisModelABike(
                              GetEntityModel(GetVehiclePedIsUsing(PlayerPedId()))
                            )
                          ) {
                            let _0x5c3ba4 = Math.ceil(_0x5120b3 * 200),
                              _0x486122 = Math.ceil(
                                GetEntitySpeed(
                                  GetVehiclePedIsUsing(PlayerPedId())
                                ) * 1.15
                              )
                            if (
                              _0x1caa75 > 950 &&
                              _0x5c3ba4 > _0x1caa75 &&
                              (_0x486122 < _0x2e518c || _0x486122 < 2)
                            ) {
                              _0x27c4df()
                            } else {
                              _0x1caa75 > 2500 &&
                                _0x486122 < _0x2e518c &&
                                _0x27c4df()
                            }
                          }
                        }
                      }
                      _0x4738ea = GetEntityCoords(PlayerPedId(), false)
                      _0x405534 = 0
                      _0x1caa75 = 0
                      _0x4b9913 = 0
                      _0x3f4fe8 = 0
                    }
                  }
                  let _0x111a51 = PlayerPedId(),
                    _0x2d68f6 = GetEntityRoll(_0x235efc)
                  IsEntityInAir(_0x235efc) &&
                    !IsThisModelABike(GetEntityModel(_0x235efc)) &&
                    (DisableControlAction(0, 59, true),
                    DisableControlAction(0, 60, true))
                  ;(_0x2d68f6 > 75 ||
                    _0x2d68f6 < -75 ||
                    (!IsVehicleEngineOn(_0x235efc) &&
                      !IsThisModelABike(GetEntityModel(_0x235efc)))) &&
                    (DisableControlAction(2, 59, true),
                    DisableControlAction(2, 60, true))
                } else {
                  await (0, _0x23e573.Delay)(1000)
                }
              } else {
                if (_0x4cf031 || _0x360f8c) {
                  _0x360f8c &&
                    emit('InteractSound_CL:PlayOnOne', 'seatbeltoff', 0.7)
                  _0x4cf031 = false
                  _0x360f8c = false
                  emit('seatbelt', false)
                }
                await (0, _0x23e573.Delay)(1500)
              }
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(1)
              ;(_0x360f8c || _0x209d15) && DisableControlAction(0, 75, true)
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(1000)
              _0x21044a = PlayerPedId()
              let _0x4b679e = GetVehiclePedIsIn(_0x21044a, false),
                _0x18fea7 = GetPedInVehicleSeat(_0x4b679e, -1)
              if (_0x4b679e !== _0x518d6e) {
                _0x209d15 = false
                _0x360f8c = false
                _0x464eed = 0
                _0x518d6e = _0x4b679e
                _0x518d6e === undefined || _0x518d6e === 0 || _0x518d6e === false
                  ? emit('DensityModifierEnable', true)
                  : ((_0x4a1fe2 = GetPedInVehicleSeat(_0x518d6e, -1)),
                    _0x4a1fe2 === _0x21044a
                      ? emit('DensityModifierEnable', true)
                      : emit('DensityModifierEnable', false))
              } else {
                if (
                  (_0x18fea7 !== _0x4a1fe2 && _0x18fea7 !== 0) ||
                  (_0x18fea7 === 0 && _0x4a1fe2 === _0x21044a)
                ) {
                  _0x4a1fe2 = _0x18fea7
                  if (_0x4a1fe2 === _0x21044a) {
                    if (_0x360f8c) {
                      if (IsPedInAnyVehicle(_0x21044a, false)) {
                        _0x3e3951()
                      }
                    }
                    emit('DensityModifierEnable', true)
                  } else {
                    if (_0x209d15) {
                      _0x4c5202()
                    } else {
                      _0x360f8c && _0x3e3951()
                    }
                    emit('DensityModifierEnable', false)
                  }
                  emit('seatbelt', false)
                }
              }
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(2)
              if (
                _0x518d6e !== undefined &&
                _0x518d6e !== false &&
                _0x518d6e !== 0
              ) {
                if (_0x209d15) {
                  DisableControlAction(1, 75, true)
                  if (IsDisabledControlJustPressed(1, 75)) {
                    _0x375b27()
                  }
                } else {
                  if (IsControlJustPressed(1, 75)) {
                  } else {
                    await (0, _0x23e573.Delay)(1000)
                  }
                }
              } else {
                await (0, _0x23e573.Delay)(5000)
              }
            }
          })
          setImmediate(async () => {
            await (0, _0x23e573.Delay)(1000)
            function _0x5cf191(_0x59a715, _0x141f1e) {
              Math.floor(Math.random() * Math.ceil(_0x141f1e)) + 1 > _0x59a715 &&
                _0x27c4df()
            }
            while (true) {
              await (0, _0x23e573.Delay)(1)
              if (
                _0x518d6e !== undefined &&
                _0x518d6e !== false &&
                _0x518d6e !== 0
              ) {
                SetPedHelmet(PlayerPedId(), false)
                if (_0x4a1fe2 === _0x21044a) {
                  let _0x15a3db = GetVehicleEngineHealth(_0x518d6e)
                  _0x15a3db < 0 && SetVehicleEngineHealth(_0x518d6e, 0)
                  let _0x15d2cb = HasEntityCollidedWithAnything(_0x518d6e)
                  if (!_0x15d2cb) {
                    _0x16d738 = GetEntitySpeed(_0x518d6e)
                    _0x37259e = GetVehicleBodyHealth(_0x518d6e)
                    _0x5f3f70 = GetEntityVelocity(_0x518d6e)
                    _0x15a3db > 10 &&
                      (_0x15a3db < 175 || _0x37259e < 50) &&
                      (_0x564af9(),
                      (_0x17c004 = true),
                      await (0, _0x23e573.Delay)(1000))
                  } else {
                    await (0, _0x23e573.Delay)(100)
                    let _0x26a890 = GetVehicleBodyHealth(_0x518d6e),
                      _0x549eec = GetEntitySpeed(_0x518d6e)
                    if (_0x15a3db > 0 && _0x37259e - _0x26a890 > 15) {
                      let _0x3800fa = _0x16d738
                      if (_0x16d738 > 30.5 && _0x549eec < _0x16d738 * 0.75) {
                        if (!IsThisModelABike(GetEntityModel(_0x518d6e))) {
                          _0x564af9()
                          _0x17c004 = true
                          if (_0x209d15 && _0x464eed > 0) {
                            _0x464eed = _0x464eed - 0.1
                          } else {
                            if (!_0x360f8c) {
                              _0x5cf191(30.5, _0x3800fa)
                            } else {
                              if (_0x360f8c && _0x3800fa > 41.6) {
                                _0x5cf191(33, _0x3800fa)
                              }
                            }
                          }
                          await (0, _0x23e573.Delay)(1000)
                          _0x16d738 = 0
                          _0x37259e = _0x26a890
                          _0x3800fa = 0
                        } else {
                          _0x564af9()
                          _0x17c004 = true
                          await (0, _0x23e573.Delay)(1000)
                          _0x16d738 = 0
                          _0x37259e = _0x26a890
                        }
                      }
                    } else {
                      if (_0x15a3db > 10 && (_0x15a3db < 195 || _0x26a890 < 50)) {
                        _0x564af9()
                        _0x17c004 = true
                        await (0, _0x23e573.Delay)(1000)
                      }
                      _0x16d738 = _0x549eec
                      _0x37259e = _0x26a890
                    }
                  }
                } else {
                  await (0, _0x23e573.Delay)(1000)
                }
              } else {
                _0x16d738 = 0
                _0x37259e = 0
                await (0, _0x23e573.Delay)(4000)
              }
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(0)
              let _0x1c9261 = GetVehiclePedIsIn(PlayerPedId(), false)
              if (DoesEntityExist(_0x1c9261) && !IsEntityDead(_0x1c9261)) {
                let _0xe95ad3 = GetEntityModel(_0x1c9261)
                !_0x172ad5(_0x1c9261) &&
                  !IsThisModelABoat(_0xe95ad3) &&
                  !IsThisModelAHeli(_0xe95ad3) &&
                  !IsThisModelAPlane(_0xe95ad3) &&
                  !IsThisModelABike(_0xe95ad3) &&
                  !IsThisModelABicycle(_0xe95ad3) &&
                  IsEntityInAir(_0x1c9261) &&
                  (DisableControlAction(0, 59, true),
                  DisableControlAction(0, 60, true))
              }
            }
          })
          setImmediate(async () => {
            while (true) {
              await (0, _0x23e573.Delay)(0)
              let _0x3c2aea = GetVehiclePedIsIn(PlayerPedId(), false),
                _0x1832bf = GetEntityRoll(_0x3c2aea)
              ;(_0x1832bf > 75 || _0x1832bf < -75) &&
                GetEntitySpeed(_0x3c2aea) < 2 &&
                (DisableControlAction(2, 59, true),
                DisableControlAction(2, 60, true))
            }
          })
          const _0x172ad5 = (_0x5d6243) => {
            let _0x4f1fa9 = GetEntityModel(_0x5d6243)
            for (let _0x2b19ce = 1; _0x2b19ce < _0x82cc08.length; _0x2b19ce++) {
              if (_0x4f1fa9 === GetHashKey(_0x82cc08[_0x2b19ce])) {
                return true
              }
            }
            return false
          }
          _0x55523c.g.exports['tw-binds'].registerKeyMapping(
            '',
            'Vehicles',
            'Toggle Seatbelt',
            '+toggleSeatbelt',
            '-toggleSeatbelt',
            'B'
          )
          RegisterCommand('+toggleSeatbelt', _0x3e3951, false)
          RegisterCommand('-toggleSeatbelt', () => {}, false)
        },
        965: function (_0x517ec6, _0x165812, _0x47ab60) {
          'use strict'
          var _0x3be587
          _0x3be587 = { value: true }
          _0x3be587 = _0x3be587 = void 0
          const _0x169bdb = _0x47ab60(615)
          async function _0x321794(_0x31ff32, _0x2dcec6, _0x4b1079, _0x525d20) {
            const _0x43ac2a = await _0x47ab60.g.exports[
              'tw-interface'
            ].taskBarSkill(15000, 3)
            if (_0x43ac2a !== 100) {
              _0x525d20({ success: false })
              return
            }
            const _0x4e333d = await _0x47ab60.g.exports[
              'tw-interface'
            ].taskBarSkill(2200, 4)
            if (_0x4e333d !== 100) {
              _0x525d20({ success: false })
              return
            }
            if (_0x43ac2a === 100 && _0x4e333d === 100) {
              const _0x4d70bc = GetEntityCoords(_0x31ff32, false),
                _0x356fc = GetEntityCoords(PlayerPedId(), false)
              if (
                GetDistanceBetweenCoords(
                  _0x4d70bc[0],
                  _0x4d70bc[1],
                  _0x4d70bc[2],
                  _0x356fc[0],
                  _0x356fc[1],
                  _0x356fc[2],
                  true
                ) < 10 &&
                _0x31ff32 !== 0 &&
                GetEntitySpeed(_0x31ff32) < 5
              ) {
                SetVehicleDoorsLocked(_0x31ff32, 1)
                SetVehicleDoorsLockedForAllPlayers(_0x31ff32, false)
                emit('DoLongHudText', 'Vehicle Unlocked.', 1)
                emit('inventory:DegenLastUsedItem', 5)
                emit('InteractSound_CL:PlayOnOne', 'unlock', 0.1)
                _0x525d20({ success: true })
                return
              }
              _0x525d20({ success: false })
              return
            }
          }
          _0x3be587 = _0x321794
          _0x47ab60.g.exports('LockpickVehicleDoor', _0x321794)
          async function _0x37947d(_0xfbaf01, _0x2fcc16, _0x11b04c, _0x38f3df) {
            const _0xd31f46 = await _0x47ab60.g.exports[
              'tw-interface'
            ].taskBarSkill(
              Math.floor(Math.random() * 5000) + 5000,
              Math.floor(Math.random() * 5) + 10
            )
            if (_0xd31f46 !== 100) {
              _0x38f3df({
                success: false,
                stage: 1,
              })
              return
            }
            await _0x47ab60.g.exports['tw-taskbar'].taskBar(
              5000,
              'Hotwiring Stage 1 Complete'
            )
            const _0x729888 = await _0x47ab60.g.exports[
              'tw-interface'
            ].taskBarSkill(
              Math.floor(Math.random() * 5000) + 5000,
              Math.floor(Math.random() * 5) + 10
            )
            if (_0x729888 !== 100) {
              _0x38f3df({
                success: false,
                stage: 2,
              })
              return
            }
            await _0x47ab60.g.exports['tw-taskbar'].taskBar(
              5000,
              'Hotwiring Stage 2 Complete'
            )
            const _0x55822e = await _0x47ab60.g.exports[
              'tw-interface'
            ].taskBarSkill(1500, Math.floor(Math.random() * 5) + 5)
            if (_0x55822e !== 100) {
              _0x38f3df({
                success: false,
                stage: 3,
              })
              return
            }
            await _0x47ab60.g.exports['tw-taskbar'].taskBar(
              5000,
              'Hotwiring Stage 3 Complete'
            )
            await (0, _0x169bdb.Delay)(500)
            if (_0xd31f46 === 100 && _0x729888 === 100 && _0x55822e === 100) {
              const _0x26864c = GetEntityCoords(_0xfbaf01, false),
                _0x3eb2c1 = GetEntityCoords(PlayerPedId(), false)
              if (
                GetDistanceBetweenCoords(
                  _0x26864c[0],
                  _0x26864c[1],
                  _0x26864c[2],
                  _0x3eb2c1[0],
                  _0x3eb2c1[1],
                  _0x3eb2c1[2],
                  true
                ) < 10 &&
                _0xfbaf01 !== 0 &&
                GetEntitySpeed(_0xfbaf01) < 5
              ) {
                emit('vehicle:keys:addNew', _0xfbaf01)
                emit('DoLongHudText', 'Ignition Working.', 1)
                await _0x47ab60.g.exports['tw-flags'].SetVehicleFlag(
                  _0xfbaf01,
                  'isStolenVehicle',
                  true
                )
                await _0x47ab60.g.exports['tw-flags'].SetVehicleFlag(
                  _0xfbaf01,
                  'isHotwiredVehicle',
                  true
                )
                _0x38f3df({
                  success: true,
                  stage: 3,
                })
                return
              }
              _0x38f3df({ success: false })
              return
            }
          }
          _0x3be587 = _0x37947d
          _0x47ab60.g.exports('HotwireVehicle', _0x37947d)
        },
        450: function (_0x2c3bd9, _0x1ad383, _0x360d7e) {
          'use strict'
          Object.defineProperty(_0x1ad383, '__esModule', { value: true })
          _0x1ad383.SwapVehicleSeat =
            _0x1ad383.TurnOffEngine =
            _0x1ad383.TurnOnEngine =
            _0x1ad383.IsVinScratched =
            _0x1ad383.GetVehicleIdentifier =
            _0x1ad383.SetVehicleMetadata =
            _0x1ad383.GetVehicleMetadata =
              void 0
          function _0x6eacaa(_0x20f545, _0x29894e) {
            const _0x4aa8a3 = Number(_0x20f545)
            switch (_0x29894e) {
              case 'fakePlate':
                DecorExistOn(_0x4aa8a3, 'fakePlate')
                  ? DecorGetBool(_0x4aa8a3, 'fakePlate')
                  : false
                break
              case 'harness':
                DecorExistOn(_0x4aa8a3, 'harness')
                  ? DecorGetInt(_0x4aa8a3, 'harness')
                  : false
                break
              default:
                return {
                  fakePlate: DecorExistOn(_0x4aa8a3, 'fakePlate')
                    ? DecorGetBool(_0x4aa8a3, 'fakePlate')
                    : false,
                  harness: DecorExistOn(_0x4aa8a3, 'harness')
                    ? DecorGetInt(_0x4aa8a3, 'harness')
                    : false,
                  carBombData: {
                    hasCarBomb: DecorExistOn(_0x4aa8a3, 'hasCarBomb')
                      ? DecorGetBool(_0x4aa8a3, 'hasCarBomb')
                      : false,
                    minSpeed: DecorExistOn(_0x4aa8a3, 'minSpeed')
                      ? DecorGetInt(_0x4aa8a3, 'minSpeed')
                      : false,
                    ticksBeforeExplode: DecorExistOn(
                      _0x4aa8a3,
                      'ticksBeforeExplode'
                    )
                      ? DecorGetInt(_0x4aa8a3, 'ticksBeforeExplode')
                      : false,
                    ticksForRemoval: DecorExistOn(_0x4aa8a3, 'ticksForRemoval')
                      ? DecorGetInt(_0x4aa8a3, 'ticksForRemoval')
                      : false,
                  },
                }
            }
          }
          _0x1ad383.GetVehicleMetadata = _0x6eacaa
          _0x360d7e.g.exports('GetVehicleMetadata', _0x6eacaa)
          function _0x57318d(_0x34d21c, _0x2ee8af, _0x50c769) {
            const _0xad7f4 = Number(_0x34d21c)
            switch (_0x2ee8af) {
              case 'fakePlate':
                DecorExistOn(_0xad7f4, 'fakePlate')
                  ? DecorSetBool(_0xad7f4, 'fakePlate', _0x50c769)
                  : false
                break
              case 'harness':
                DecorExistOn(_0xad7f4, 'harness')
                  ? DecorSetInt(_0xad7f4, 'harness', _0x50c769)
                  : false
                break
              case 'hasCarBomb':
                DecorExistOn(_0xad7f4, 'hasCarBomb')
                  ? DecorSetBool(_0xad7f4, 'hasCarBomb', _0x50c769)
                  : false
                break
              case 'minSpeed':
                DecorExistOn(_0xad7f4, 'minSpeed')
                  ? DecorSetInt(_0xad7f4, 'minSpeed', _0x50c769)
                  : false
                break
              case 'ticksBeforeExplode':
                DecorExistOn(_0xad7f4, 'ticksBeforeExplode')
                  ? DecorSetInt(_0xad7f4, 'ticksBeforeExplode', _0x50c769)
                  : false
                break
              case 'ticksForRemoval':
                DecorExistOn(_0xad7f4, 'ticksForRemoval')
                  ? DecorSetInt(_0xad7f4, 'ticksForRemoval', _0x50c769)
                  : false
                break
            }
          }
          _0x1ad383.SetVehicleMetadata = _0x57318d
          _0x360d7e.g.exports('SetVehicleMetadata', _0x57318d)
          function _0x5d56b9(_0xbd20b6) {
            return false
          }
          _0x1ad383.GetVehicleIdentifier = _0x5d56b9
          _0x360d7e.g.exports('GetVehicleIdentifier', _0x5d56b9)
          function _0x3875ef(_0x3291ac) {
            return false
          }
          _0x1ad383.IsVinScratched = _0x3875ef
          _0x360d7e.g.exports('IsVinScratched', _0x3875ef)
          function _0x58db09(_0x34375f, _0x193a1a = false) {
            const _0x53c9b1 = GetVehicleEngineHealth(_0x34375f),
              _0x3ae5d9 = GetVehicleBodyHealth(_0x34375f)
            if (_0x53c9b1 <= 150 || _0x3ae5d9 <= 50) {
              return (
                emit('DoLongHudText', 'Something seems to be damaged.', 2), false
              )
            }
            return SetVehicleEngineOn(
              Number(_0x34375f),
              true,
              _0x193a1a || true,
              false
            )
          }
          _0x1ad383.TurnOnEngine = _0x58db09
          function _0x387938(_0xdb0327, _0x104076 = false) {
            return SetVehicleEngineOn(
              Number(_0xdb0327),
              false,
              _0x104076 || true,
              false
            )
          }
          _0x1ad383.TurnOffEngine = _0x387938
          function _0xd7c93c(_0x4d2e5f, _0xac8798) {}
          _0x1ad383.SwapVehicleSeat = _0xd7c93c
        },
        615: function (_0x3a1d63, _0x36e102) {
          'use strict'
          Object.defineProperty(_0x36e102, '__esModule', { value: true })
          _0x36e102.loadAnimDict =
            _0x36e102.Delay =
            _0x36e102.GetPedVehicleSeat =
            _0x36e102.SyncedExecution =
            _0x36e102.PlayEntitySound =
            _0x36e102.GetClosetPlayer =
              void 0
          function _0x196341(
            _0x18d23e,
            _0x532809,
            _0x586fff,
            _0x4985b9,
            _0x4b82fe,
            _0x2d09d9,
            _0x5b450d,
            _0x1371a9,
            _0x36ece2
          ) {
            return GetClosestPed(
              _0x18d23e,
              _0x532809,
              _0x586fff,
              _0x4985b9,
              _0x4b82fe,
              _0x2d09d9,
              _0x5b450d,
              _0x1371a9,
              _0x36ece2
            )
          }
          _0x36e102.GetClosetPlayer = _0x196341
          function _0x3ff663(
            _0x59e87a,
            _0x2b93d1,
            _0x3c3e45,
            _0x4e2748,
            _0x501c24,
            _0x885c5e
          ) {
            return PlaySoundFromEntity(
              _0x59e87a,
              _0x2b93d1,
              _0x3c3e45,
              _0x4e2748,
              _0x501c24,
              _0x885c5e
            )
          }
          _0x36e102.PlayEntitySound = _0x3ff663
          function _0x18a330() {}
          _0x36e102.SyncedExecution = _0x18a330
          function _0x1ffb70(_0x5caa68, _0x4526ef) {
            return GetPedInVehicleSeat(_0x5caa68, _0x4526ef)
          }
          _0x36e102.GetPedVehicleSeat = _0x1ffb70
          const _0x193c64 = (_0x17e18c) =>
            new Promise((_0xc4915c) => setTimeout(_0xc4915c, _0x17e18c))
          _0x36e102.Delay = _0x193c64
          async function _0x3fd8d7(_0x18be43) {
            while (!HasAnimDictLoaded(_0x18be43)) {
              RequestAnimDict(_0x18be43)
              await (0, _0x36e102.Delay)(5)
            }
          }
          _0x36e102.loadAnimDict = _0x3fd8d7
        },
        930: function (_0x1d101c) {
          'use strict'
          _0x1d101c.exports = JSON.parse(
            '{"garage_id":"ems_shared","name":"EMS Shared Vehicle Garage","type":"shared","job":"ems","parking_limit":10,"location":{"vectors":{"x":326.03,"y":-588.75,"z":28.8},"length":17.8,"width":6.2,"options":{"heading":250,"minZ":27.8,"maxZ":31.8,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":338.05807,"coords":{"x":332.717,"y":-591.197,"z":27.797}},{"type":"land","size":2,"distance":1.2,"heading":338.05807,"coords":{"x":329.376,"y":-590.018,"z":27.797}},{"type":"land","size":2,"distance":1.2,"heading":338.05807,"coords":{"x":326.035,"y":-588.839,"z":27.797}},{"type":"land","size":2,"distance":1.2,"heading":338.05807,"coords":{"x":322.694,"y":-587.66,"z":27.797}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":319.353,"y":-586.481,"z":27.797}}]}'
          )
        },
        37: function (_0x574fc7) {
          'use strict'
          _0x574fc7.exports = JSON.parse(
            '{"garage_id":"garage_a","name":"Garage A","type":"public","parking_limit":10,"location":{"vectors":{"x":466.29,"y":-71.95,"z":77.46},"length":11.8,"width":5,"options":{"heading":70,"minZ":76.46,"maxZ":80.46,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":469.84,"y":-73.424,"z":76.461}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":466.25,"y":-72.174,"z":76.461}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":466.25,"y":-70.924,"z":76.461}}]}'
          )
        },
        368: function (_0x1098ad) {
          'use strict'
          _0x1098ad.exports = JSON.parse(
            '{"garage_id":"garage_alta","name":"Alta Street Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":-315.79,"y":-982.05,"z":35.11},"length":9,"width":43.6,"options":{"heading":338,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-297.812,"y":-990.57,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-301.286,"y":-989.269,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-304.761,"y":-987.968,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-308.235,"y":-986.667,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-311.709,"y":-985.366,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-315.184,"y":-984.065,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-318.658,"y":-982.763,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-322.132,"y":-981.462,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-325.607,"y":-980.161,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-329.081,"y":-978.86,"z":30.081}},{"type":"land","size":2,"distance":1.2,"heading":160,"coords":{"x":-332.555,"y":-977.559,"z":30.081}}]}'
          )
        },
        42: function (_0x1babbe) {
          'use strict'
          _0x1babbe.exports = JSON.parse(
            '{"garage_id":"garage_barrio","name":"Garage Barrio","type":"public","parking_limit":10,"location":{"vectors":{"x":319.08,"y":-2033.48,"z":20.51},"length":36.4,"width":5,"options":{"heading":230,"minZ":27.13,"maxZ":31.13,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":331.769,"y":-2044.558,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":329.451,"y":-2042.594,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":327.133,"y":-2040.629,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":324.814,"y":-2038.665,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":322.496,"y":-2036.701,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":320.178,"y":-2034.737,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":317.859,"y":-2032.773,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":315.541,"y":-2030.809,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":313.223,"y":-2028.845,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":310.904,"y":-2026.881,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":308.586,"y":-2024.917,"z":19.8}},{"type":"land","size":2,"distance":1.2,"heading":320.05807,"coords":{"x":306.268,"y":-2022.952,"z":19.8}}]}'
          )
        },
        592: function (_0x58bc47) {
          'use strict'
          _0x58bc47.exports = JSON.parse(
            '{"garage_id":"garage_burgershot","name":"Burger Shot Garage","type":"business","business_id":"burger_shot","parking_limit":1,"location":{"vectors":{"x":-315.79,"y":-982.05,"z":35.11},"length":9,"width":43.6,"options":{"heading":338,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":303,"coords":{"x":-1174.323,"y":-872.937,"z":13.219}},{"type":"land","size":2,"distance":1.2,"heading":303,"coords":{"x":-1172.267,"y":-876.099,"z":13.199}},{"type":"land","size":2,"distance":1.2,"heading":303,"coords":{"x":-1170.212,"y":-879.261,"z":13.18}},{"type":"land","size":2,"distance":1.2,"heading":303,"coords":{"x":-1168.156,"y":-882.423,"z":13.16}}]}'
          )
        },
        153: function (_0x5890a7) {
          'use strict'
          _0x5890a7.exports = JSON.parse(
            '{"garage_id":"garage_casino","name":"Casino Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":892.84,"y":-3.49,"z":78.76},"length":7,"width":50.4,"options":{"heading":0,"minZ":77.76,"maxZ":82.96,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":872.423,"y":8.874,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":875.281,"y":7.131,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":878.138,"y":5.387,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":895.424,"y":-5.032,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":898.708,"y":-7.113,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":901.993,"y":-9.194,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":905.278,"y":-11.276,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":908.563,"y":-13.357,"z":77.764}},{"type":"land","size":2,"distance":1.2,"heading":324,"coords":{"x":911.848,"y":-15.438,"z":77.764}}]}'
          )
        },
        179: function (_0x5c9019) {
          'use strict'
          _0x5c9019.exports = JSON.parse(
            '{"garage_id":"garage_fudge","name":"Garage Fudge Lane","type":"public","parking_limit":10,"location":{"vectors":{"x":1160.65,"y":-1645.87,"z":36.92},"length":5.4,"width":5.8,"options":{"heading":300,"minZ":35.92,"maxZ":39.92,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":210.32487,"coords":{"x":1160.924,"y":-1646.432,"z":35.917}}]}'
          )
        },
        283: function (_0x15d13b) {
          'use strict'
          _0x15d13b.exports = JSON.parse(
            '{"garage_id":"garage_impound","name":"Impound Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":76.94,"y":6400.15,"z":31.23},"length":7.2,"width":17.2,"options":{"heading":0,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":312,"coords":{"x":72.529,"y":6404.381,"z":30.226}},{"type":"land","size":2,"distance":1.2,"heading":312,"coords":{"x":75.358,"y":6401.692,"z":30.226}},{"type":"land","size":2,"distance":1.2,"heading":312,"coords":{"x":78.188,"y":6399.003,"z":30.226}},{"type":"land","size":2,"distance":1.2,"heading":312,"coords":{"x":81.017,"y":6396.313,"z":30.226}}]}'
          )
        },
        921: function (_0x2ba5ca) {
          'use strict'
          _0x2ba5ca.exports = JSON.parse(
            '{"garage_id":"garage_impound","name":"Impound Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":-152.94,"y":-1168.26,"z":23.77},"length":8.4,"width":5.6,"options":{"heading":0,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":91,"coords":{"x":-153.167,"y":-1170.002,"z":22.761}},{"type":"land","size":2,"distance":1.2,"heading":91,"coords":{"x":-153.178,"y":-1166.529,"z":22.767}}]}'
          )
        },
        696: function (_0x22187a) {
          'use strict'
          _0x22187a.exports = JSON.parse(
            '{"garage_id":"garage_pier","name":"Pier Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":-1587.39,"y":-898.65,"z":9.74},"length":6,"width":12.8,"options":{"heading":320,"minZ":7.94,"maxZ":11.94,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":140,"coords":{"x":-1590.957,"y":-895.5,"z":8.547}},{"type":"land","size":2,"distance":1.2,"heading":140,"coords":{"x":-1588.607,"y":-897.503,"z":8.566}},{"type":"land","size":2,"distance":1.2,"heading":140,"coords":{"x":-1586.256,"y":-899.507,"z":8.586}},{"type":"land","size":2,"distance":1.2,"heading":140,"coords":{"x":-1583.906,"y":-901.51,"z":8.606}},{"type":"land","size":2,"distance":1.2,"heading":140,"coords":{"x":-1581.555,"y":-903.513,"z":8.626}}]}'
          )
        },
        194: function (_0x195ac8) {
          'use strict'
          _0x195ac8.exports = JSON.parse(
            '{"garage_id":"garage_q","name":"Garage Q","type":"public","parking_limit":10,"location":{"vectors":{"x":283.44,"y":-332.58,"z":44.92},"length":37,"width":25,"options":{"heading":250,"minZ":43.12,"maxZ":47.12,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":277.165,"y":-340.141,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":278.384,"y":-336.883,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":279.603,"y":-333.626,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":280.822,"y":-330.369,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":282.042,"y":-327.112,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":250,"coords":{"x":283.261,"y":-323.855,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":289.377,"y":-326.137,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":288.149,"y":-329.386,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":286.921,"y":-332.635,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":285.693,"y":-335.884,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":284.466,"y":-339.133,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":283.238,"y":-342.381,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":294.401,"y":-346.365,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":295.579,"y":-343.127,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":296.757,"y":-339.888,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":297.936,"y":-336.65,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":299.114,"y":-333.412,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":241,"coords":{"x":300.292,"y":-330.174,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":271.053,"y":-319.298,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":269.851,"y":-322.525,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":268.648,"y":-325.753,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":267.445,"y":-328.981,"z":43.921}},{"type":"land","size":2,"distance":1.2,"heading":68,"coords":{"x":266.243,"y":-332.209,"z":43.921}}]}'
          )
        },
        299: function (_0x49af31) {
          'use strict'
          _0x49af31.exports = JSON.parse(
            '{"garage_id":"garage_red","name":"Garage Red","type":"public","parking_limit":10,"location":{"vectors":{"x":-333.31,"y":-750.99,"z":33.97},"length":11.8,"width":6.4,"options":{"heading":270,"minZ":32.97,"maxZ":36.97,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":175.84078,"coords":{"x":-337.497,"y":-750.516,"z":32.969}},{"type":"land","size":2,"distance":1.2,"heading":175.84078,"coords":{"x":-334.64,"y":-750.633,"z":32.969}},{"type":"land","size":2,"distance":1.2,"heading":175.84078,"coords":{"x":-331.784,"y":-750.751,"z":32.969}},{"type":"land","size":2,"distance":1.2,"heading":175.84078,"coords":{"x":-328.927,"y":-750.869,"z":32.969}}]}'
          )
        },
        372: function (_0x41de2d) {
          'use strict'
          _0x41de2d.exports = JSON.parse(
            '{"garage_id":"garage_sandy","name":"Sandy Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":1828.17,"y":3661.28,"z":34.02},"length":5.8,"width":18.8,"options":{"heading":30,"minZ":33.02,"maxZ":37.42,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":30,"coords":{"x":1821.72,"y":3658.059,"z":33.009}},{"type":"land","size":2,"distance":1.2,"heading":30,"coords":{"x":1824.995,"y":3659.948,"z":32.936}},{"type":"land","size":2,"distance":1.2,"heading":30,"coords":{"x":1828.27,"y":3661.837,"z":32.862}},{"type":"land","size":2,"distance":1.2,"heading":30,"coords":{"x":1831.545,"y":3663.726,"z":32.789}},{"type":"land","size":2,"distance":1.2,"heading":30,"coords":{"x":1834.82,"y":3665.615,"z":32.716}}]}'
          )
        },
        662: function (_0x45e33e) {
          'use strict'
          _0x45e33e.exports = JSON.parse(
            '{"garage_id":"garage_seoul","name":"Garage Little Seoul","type":"public","parking_limit":10,"location":{"vectors":{"x":-678.54,"y":-885.18,"z":24.5},"length":3,"width":5.4,"options":{"heading":15,"minZ":23.5,"maxZ":27.5,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":101.05807,"coords":{"x":-678.332,"y":-885.062,"z":23.487}}]}'
          )
        },
        976: function (_0xf9048c) {
          'use strict'
          _0xf9048c.exports = JSON.parse(
            '{"garage_id":"garage_t","name":"Garage T","type":"public","parking_limit":10,"location":{"vectors":{"x":224.93,"y":-786.86,"z":30.9},"length":41.4,"width":11.8,"options":{"heading":160,"minZ":29.9,"maxZ":33.9,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":216.009,"y":-804.476,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":216.937,"y":-801.957,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":217.864,"y":-799.438,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":218.792,"y":-796.919,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":219.72,"y":-794.399,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":221.576,"y":-789.361,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":222.504,"y":-786.842,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":223.432,"y":-784.323,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":224.36,"y":-781.803,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":225.288,"y":-779.284,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":226.215,"y":-776.765,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":227.143,"y":-774.246,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":228.071,"y":-771.727,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":228.999,"y":-769.208,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":216.009,"y":-804.476,"z":29.802}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":216.937,"y":-801.957,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":217.864,"y":-799.438,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":218.792,"y":-796.919,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":219.72,"y":-794.399,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":220.648,"y":-791.88,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":221.576,"y":-789.361,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":222.504,"y":-786.842,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":223.432,"y":-784.323,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":224.36,"y":-781.803,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":225.288,"y":-779.284,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":226.215,"y":-776.765,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":227.143,"y":-774.246,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":228.071,"y":-771.727,"z":29.801}},{"type":"land","size":2,"distance":2,"heading":256,"coords":{"x":228.999,"y":-769.208,"z":29.801}}]}'
          )
        },
        88: function (_0x83e875) {
          'use strict'
          _0x83e875.exports = JSON.parse(
            '{"garage_id":"garage_tuner","name":"Garage Tuner","type":"public","parking_limit":10,"location":{"vectors":{"x":162.31,"y":-3001.24,"z":5.86},"length":20,"width":6,"options":{"heading":0,"minZ":4.86,"maxZ":8.86,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.23,"y":-3009.301,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.328,"y":-3006.06,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.427,"y":-3002.819,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.525,"y":-2999.577,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.624,"y":-2996.336,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.722,"y":-2993.095,"z":4.952}},{"type":"land","size":2,"distance":1.2,"heading":266.0332,"coords":{"x":162.821,"y":-2989.854,"z":4.952}}]}'
          )
        },
        711: function (_0x46401c) {
          'use strict'
          _0x46401c.exports = JSON.parse(
            '{"garage_id":"mrpd_police","name":"MRPD Police Garage","type":"public","parking_limit":10,"location":{"vectors":{"x":442.23,"y":-1025.77,"z":28.73},"length":6.4,"width":18.8,"options":{"heading":5,"minZ":27.13,"maxZ":31.13,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":183,"coords":{"x":449.554,"y":-1025.648,"z":27.584}},{"type":"land","size":2,"distance":1.2,"heading":183,"coords":{"x":446.05,"y":-1026.037,"z":27.649}},{"type":"land","size":2,"distance":1.2,"heading":183,"coords":{"x":442.547,"y":-1026.426,"z":27.714}},{"type":"land","size":2,"distance":1.2,"heading":183,"coords":{"x":439.043,"y":-1026.815,"z":27.778}},{"type":"land","size":2,"distance":1.2,"heading":183,"coords":{"x":435.539,"y":-1027.204,"z":27.843}}]}'
          )
        },
        454: function (_0x26bf11) {
          'use strict'
          _0x26bf11.exports = JSON.parse(
            '{"garage_id":"pd_shared","name":"PD Shared Vehicle Garage","type":"shared","job":["police","state","ranger"],"parking_limit":10,"location":{"vectors":{"x":442.1,"y":-991.29,"z":25.69},"length":14.4,"width":14,"options":{"heading":0,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":2,"heading":89,"coords":{"x":445.827,"y":-996.969,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":89,"coords":{"x":445.815,"y":-994.269,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":89,"coords":{"x":445.802,"y":-991.568,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":89,"coords":{"x":445.79,"y":-988.868,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":89,"coords":{"x":445.778,"y":-986.168,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":268,"coords":{"x":437.493,"y":-986.143,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":268,"coords":{"x":437.536,"y":-988.844,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":268,"coords":{"x":437.579,"y":-991.545,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":268,"coords":{"x":437.622,"y":-994.246,"z":24.7}},{"type":"land","size":2,"distance":2,"heading":268,"coords":{"x":437.665,"y":-996.947,"z":24.7}}]}'
          )
        },
        483: function (_0x1e4d9e) {
          'use strict'
          _0x1e4d9e.exports = JSON.parse(
            '{"garage_id":"pd_shared_bike","name":"PD Shared Bike Garage","type":"shared","job":["police","state","ranger"],"parking_limit":10,"location":{"vectors":{"x":425.8,"y":-986.65,"z":25.7},"length":24.4,"width":4.8,"options":{"heading":0,"debugPoly":false}},"vehicle_types":["land"],"parking_spots":[{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.603,"y":-997.134,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.602,"y":-994.423,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.601,"y":-991.713,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.601,"y":-989.003,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.585,"y":-984.287,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.571,"y":-981.576,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.557,"y":-978.864,"z":24.7}},{"type":"land","size":2,"distance":1.2,"heading":89,"coords":{"x":425.543,"y":-976.153,"z":24.7}}]}'
          )
        },
      },
      _0x19d3eb = {}
    function _0x32b6af(_0x2a63a6) {
      var _0x52e07e = _0x19d3eb[_0x2a63a6]
      if (_0x52e07e !== undefined) {
        return _0x52e07e.exports
      }
      var _0x4b6077 = (_0x19d3eb[_0x2a63a6] = { exports: {} })
      _0x5dd8df[_0x2a63a6].call(
        _0x4b6077.exports,
        _0x4b6077,
        _0x4b6077.exports,
        _0x32b6af
      )
      return _0x4b6077.exports
    }
    !(function () {
      _0x32b6af.g = (function () {
        if (typeof globalThis === 'object') {
          return globalThis
        }
        try {
          return this || new Function('return this')()
        } catch (_0x3b8fc7) {
          if (typeof window === 'object') {
            return window
          }
        }
      })()
    })()
    !(function () {
      _0x32b6af.o = function (_0x4fda24, _0x3237c3) {
        return Object.prototype.hasOwnProperty.call(_0x4fda24, _0x3237c3)
      }
    })()
    _0x32b6af(50)
    _0x32b6af(957)
    _0x32b6af(908)
    _0x32b6af(369)
    _0x32b6af(965)
    _0x32b6af(30)
    _0x32b6af(120)
    var _0x3b379f = _0x32b6af(17)
  })()
  