import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DetalleComanda} from '../models';
import {DetalleComandaRepository} from '../repositories';

export class DetalleComandaController {
  constructor(
    @repository(DetalleComandaRepository)
    public detalleComandaRepository : DetalleComandaRepository,
  ) {}

  @post('/detalle-comandas')
  @response(200, {
    description: 'DetalleComanda model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetalleComanda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleComanda, {
            title: 'NewDetalleComanda',
            exclude: ['idDetalleComanda'],
          }),
        },
      },
    })
    detalleComanda: Omit<DetalleComanda, 'idDetalleComanda'>,
  ): Promise<DetalleComanda> {
    return this.detalleComandaRepository.create(detalleComanda);
  }

  @get('/detalle-comandas/count')
  @response(200, {
    description: 'DetalleComanda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetalleComanda) where?: Where<DetalleComanda>,
  ): Promise<Count> {
    return this.detalleComandaRepository.count(where);
  }

  @get('/detalle-comandas')
  @response(200, {
    description: 'Array of DetalleComanda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetalleComanda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetalleComanda) filter?: Filter<DetalleComanda>,
  ): Promise<DetalleComanda[]> {
    return this.detalleComandaRepository.find(filter);
  }

  @patch('/detalle-comandas')
  @response(200, {
    description: 'DetalleComanda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleComanda, {partial: true}),
        },
      },
    })
    detalleComanda: DetalleComanda,
    @param.where(DetalleComanda) where?: Where<DetalleComanda>,
  ): Promise<Count> {
    return this.detalleComandaRepository.updateAll(detalleComanda, where);
  }

  @get('/detalle-comandas/{id}')
  @response(200, {
    description: 'DetalleComanda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetalleComanda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetalleComanda, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleComanda>
  ): Promise<DetalleComanda> {
    return this.detalleComandaRepository.findById(id, filter);
  }

  @patch('/detalle-comandas/{id}')
  @response(204, {
    description: 'DetalleComanda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleComanda, {partial: true}),
        },
      },
    })
    detalleComanda: DetalleComanda,
  ): Promise<void> {
    await this.detalleComandaRepository.updateById(id, detalleComanda);
  }

  @put('/detalle-comandas/{id}')
  @response(204, {
    description: 'DetalleComanda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalleComanda: DetalleComanda,
  ): Promise<void> {
    await this.detalleComandaRepository.replaceById(id, detalleComanda);
  }

  @del('/detalle-comandas/{id}')
  @response(204, {
    description: 'DetalleComanda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleComandaRepository.deleteById(id);
  }
}
