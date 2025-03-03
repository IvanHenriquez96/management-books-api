import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller('/reviews')
export class ReviewController {

    constructor(private reviewService: ReviewService){}

    @Get('/')
    findAll(){
        return this.reviewService.findAll();
    }

    @Post('/')
    create() {
        return this.reviewService.create();
    }

    @Put(':id')
    update(@Param() id: string) {
        return this.reviewService.update(id);
    }

    @Delete(':id')
    delete(@Param() id: string){
        return this.reviewService.delete(id);
    }

}