!(function () {
    'use strict'
    var _0x4467bb = {
        981: function (_0x259452, _0xcb309f) {
          Object.defineProperty(_0xcb309f, '__esModule', { value: true })
          _0xcb309f.Delay = void 0
          _0xcb309f.Delay = (_0x13135d) =>
            new Promise((_0x1a7a7d) => setTimeout(_0x1a7a7d, _0x13135d))
        },
      },
      _0x4cf737 = {}
    function _0x3126d7(_0x545067) {
      var _0x7e732f = _0x4cf737[_0x545067]
      if (void 0 !== _0x7e732f) {
        return _0x7e732f.exports
      }
      var _0x4fcb3b = (_0x4cf737[_0x545067] = { exports: {} })
      return (
        _0x4467bb[_0x545067](_0x4fcb3b, _0x4fcb3b.exports, _0x3126d7),
        _0x4fcb3b.exports
      )
    }
    _0x3126d7.g = (function () {
      if ('object' == typeof globalThis) {
        return globalThis
      }
      try {
        return this || new Function('return this')()
      } catch (_0x390539) {
        if ('object' == typeof window) {
          return window
        }
      }
    })()
    setImmediate(async () => {
      await SQL.execute(
        'UPDATE characters_cars SET vehicle_state = @vehicle_state',
        { vehicle_state: 'In' }
      )
    })
    RPC.register('vehicle:keys:send', (_0x5e3453, _0x114cb8, _0x59ff6f) => {
      emitNet('vehicle:keys:received', Number(_0x114cb8), _0x59ff6f)
    })
    ;(function () {
      const _0x37164f = _0x3126d7(981)
      RPC.register(
        'arp:vehicles:getPlayerVehicles',
        async (_0x246e01, _0x2f7904, _0x496b61) =>
          (await SQL.execute(
            'SELECT * FROM characters_cars WHERE cid = @cid AND current_garage = @current_garage AND NOT vehicle_state = @vehicle_state',
            {
              cid: _0x2f7904,
              current_garage: _0x496b61,
              vehicle_state: 'Out',
            }
          )) || []
      )
      RPC.register(
        'arp:vehicles:getSharedVehicles',
        async (_0x1bacaa, _0x36d783, _0x51adc1) => {
          if (!Array.isArray(_0x36d783)) {
            return (
              (await SQL.execute(
                'SELECT * FROM characters_cars WHERE shared_job = @shared_job AND current_garage = @current_garage AND NOT vehicle_state = @vehicle_state',
                {
                  shared_job: _0x36d783,
                  current_garage: _0x51adc1,
                  vehicle_state: 'Out',
                }
              )) || []
            )
          }
          {
            let _0x9d5193 = false
            for (let _0x261297 = 0; _0x261297 < _0x36d783.length; _0x261297++) {
              'police' === _0x36d783[_0x261297] && (_0x9d5193 = true)
              'state' === _0x36d783[_0x261297] && (_0x9d5193 = true)
            }
            if (_0x9d5193) {
              return (
                (await SQL.execute(
                  'SELECT * FROM characters_cars WHERE shared_job = @shared_job AND current_garage = @current_garage AND NOT vehicle_state = @vehicle_state',
                  {
                    shared_job: 'police',
                    current_garage: _0x51adc1,
                    vehicle_state: 'Out',
                  }
                )) || []
              )
            }
          }
          return []
        }
      )
      RPC.register(
        'arp:vehicles:getAllPlayerVehicles',
        async (_0x243029, _0x5cd5d2) =>
          (await SQL.execute('SELECT * FROM characters_cars WHERE cid = @cid', {
            cid: _0x5cd5d2,
          })) || []
      )
      RPC.register(
        'arp:vehicles:getPlayerVehiclesByCharacterId',
        async (_0x1e07a8, _0x19119d) =>
          (await SQL.execute('SELECT * FROM characters_cars WHERE cid = @cid', {
            cid: _0x19119d,
          })) || []
      )
      RPC.register(
        'arp:vehicles:spawnGarageVehicle',
        async (_0x3da0b5, _0x289a5a, _0x1d5b96, _0x26f8c0) => {
          const _0x16b89c = CreateVehicle(
              _0x1d5b96,
              Number(_0x26f8c0.x),
              Number(_0x26f8c0.y),
              Number(_0x26f8c0.z),
              Number(_0x26f8c0.h),
              true,
              true
            ),
            _0x544a18 = new Date().getTime() / 1000
          for (
            ;
            !DoesEntityExist(_0x16b89c) &&
            (await (0, _0x37164f.Delay)(0),
            !(new Date().getTime() / 1000 > _0x544a18 + 5));
  
          ) {}
          if (
            !(await SQL.execute(
              'UPDATE characters_cars SET vehicle_state = @vehicle_state WHERE license_plate = @license_plate',
              {
                vehicle_state: 'Out',
                license_plate: _0x289a5a,
              }
            ))
          ) {
            return 0
          }
          const _0x4c23e4 = NetworkGetNetworkIdFromEntity(_0x16b89c) || 0
          return (
            emitNet(
              'tw-vehicles:spawnedGarageVehicle',
              -1,
              _0x4c23e4,
              _0x1d5b96
            ),
            _0x4c23e4
          )
        }
      )
      RPC.register(
        'arp:vehicles:canStore',
        async (
          _0x2613d8,
          _0x22de0a,
          _0x36b958,
          _0x30e755,
          _0x2572a4,
          _0x35678c,
          _0x2c6867,
          _0x1add36
        ) => {
          const _0x3250ce = await SQL.execute(
            'SELECT COUNT(*) AS total FROM characters_cars WHERE license_plate = @license_plate',
            { license_plate: _0x22de0a }
          )
          return Number(_0x3250ce[0].total) > 0
            ? (await SQL.execute(
                'UPDATE characters_cars SET vehicle_state = @vehicle_state, current_garage = @current_garage, fuel = @fuel, appearance = @appearance, mods = @mods, damage = @damage WHERE license_plate = @license_plate',
                {
                  vehicle_state: 'In',
                  current_garage: _0x2c6867,
                  fuel: _0x36b958,
                  appearance:
                    void 0 !== _0x30e755 ? JSON.stringify(_0x30e755) : {},
                  mods: void 0 !== _0x2572a4 ? JSON.stringify(_0x2572a4) : {},
                  damage: JSON.stringify(_0x35678c),
                  license_plate: _0x22de0a,
                }
              ))
              ? [true, 'Vehicle stored successfully.']
              : [false, 'An error occured while trying to store your vehicle.']
            : [false, 'You cannot park local vehicles!']
        }
      )
      RPC.register(
        'tw-business:hasGarageAccess',
        async (_0x31b2eb, _0x1b40a6, _0x2516de) => {
          const _0xff935 = await SQL.execute(
            'SELECT * FROM businesses WHERE business_id = @business_id',
            { business_id: _0x2516de }
          )
          if (!_0xff935) {
            return false
          }
          const _0x45959a = JSON.parse(_0xff935[0].employees)
          let _0x2a79ef = false
          return (
            Object.entries(_0x45959a).forEach(([_0x14259b, _0x4d75b7]) => {
              if (Number(_0x4d75b7.cid) === Number(_0x1b40a6)) {
                if (_0x2a79ef) {
                  return
                }
                _0x2a79ef = true
              }
            }),
            _0x2a79ef
          )
        }
      )
    })()
    RPC.register(
      'vehicle:refuel:hasEnough',
      async (_0x3aa1af, _0x3df163, _0x2c58a1) => {
        const _0x5bfcaf = await SQL.execute(
          'SELECT bank, cash FROM characters WHERE id = @id',
          { id: _0x3df163 }
        )
        return !!_0x5bfcaf[0] && _0x5bfcaf[0].cash >= _0x2c58a1
      }
    )
    RPC.register(
      'vehicle:refuel:finalizePayment',
      async (_0x227d25, _0x514825) =>
        !!_0x3126d7.g.exports['tw-vehicles'].moneyRemover(_0x227d25, _0x514825)
    )
    RPC.register(
      'arp:vehicles:sellPhone',
      async (_0x16ac29, _0x17ee86, _0x1e1ec2, _0x344ef7, _0x3273b9) => {
        emitNet(
          'arp:vehicles:sellNotify',
          -1,
          Number(_0x1e1ec2),
          Number(_0x17ee86),
          _0x344ef7,
          Number(_0x3273b9),
          _0x16ac29
        )
      }
    )
    RPC.register(
      'arp:vehicles:sell:vehicle',
      async (_0x1299a2, _0x500137, _0x337670, _0x5350c2, _0x42b768) => {}
    )
    onNet(
      'tw-vehicles:updateVehicle',
      async (_0x2c492b, _0x4dee4c, _0x488869) => {
        _0x2c492b &&
          (await SQL.execute(
            'UPDATE characters_cars SET appearance = @appearance, mods = @mods WHERE license_plate = @license_plate',
            {
              appearance: JSON.stringify(_0x4dee4c) || null,
              mods: JSON.stringify(_0x488869) || null,
              license_plate: _0x2c492b,
            }
          ))
      }
    )
  })()
  