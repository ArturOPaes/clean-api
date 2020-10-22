import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '@/main/factories/controllers/usecases/survey/load-surveys-factory'

export const makeLoadSurveysController = (): Controller => {
  return makeLogControllerDecorator(
    new LoadSurveysController(makeDbLoadSurveys())
  )
}
