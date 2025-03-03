import { Controller, Get } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller('/reviews')
export class ReviewController {

    constructor(private reviewService: ReviewService){}

    @Get('/')
    findAll(){
        return this.reviewService.findAll();
    }
}